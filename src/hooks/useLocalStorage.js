import { useState, useCallback, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Safe reader from window.localStorage
  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }

    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null || raw === undefined || raw === 'undefined' || raw === 'null' || raw === '') {
        const value = typeof initialValue === 'function' ? initialValue() : initialValue;
        if (value !== undefined) {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
        return value;
      }
      return JSON.parse(raw);
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValue);

  // Synchronous and immediate setter that updates both React state AND localStorage instantly
  const setValue = useCallback((value) => {
    try {
      setStoredValue((currentValue) => {
        // Support function updaters: setStoredValue(prev => ...)
        const resolvedValue = typeof value === 'function' ? value(currentValue) : value;

        if (typeof window !== 'undefined') {
          if (resolvedValue === undefined) {
            window.localStorage.removeItem(key);
          } else {
            // Write immediately and synchronously to localStorage
            window.localStorage.setItem(key, JSON.stringify(resolvedValue));
          }
        }

        return resolvedValue;
      });
    } catch (error) {
      console.error(`Error saving localStorage key "${key}":`, error);
    }
  }, [key]);

  // Synchronize across tabs or if storage event occurs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.storageArea === window.localStorage) {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : initialValue;
          setStoredValue(newValue);
        } catch (err) {
          console.warn(`Error syncing storage for key "${key}":`, err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue];
}
