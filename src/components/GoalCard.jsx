import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Circle, Calendar, Trash2, Edit3, Check, X, AlertCircle } from 'lucide-react';
import { formatDateUz } from '../utils/formatters';

export default function GoalCard({ goal }) {
  const { toggleGoal, deleteGoal, updateGoal } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(goal.title);
  const [editCategory, setEditCategory] = useState(goal.category || 'Shaxsiy rivojlanish');
  const [editDeadline, setEditDeadline] = useState(goal.deadline || '');
  const [editPriority, setEditPriority] = useState(goal.priority || 'O‘rta');

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    updateGoal(goal.id, {
      title: editTitle.trim(),
      category: editCategory,
      deadline: editDeadline,
      priority: editPriority
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(goal.title);
    setEditCategory(goal.category || 'Shaxsiy rivojlanish');
    setEditDeadline(goal.deadline || '');
    setEditPriority(goal.priority || 'O‘rta');
    setIsEditing(false);
  };

  const priorityColors = {
    'Yuqori': 'priority-high',
    'O‘rta': 'priority-medium',
    'Past': 'priority-low'
  };

  if (isEditing) {
    return (
      <form className="goal-card-edit-form" onSubmit={handleSaveEdit}>
        <div className="edit-form-header">
          <span className="edit-title-label">Maqsadni tahrirlash</span>
        </div>
        <input
          type="text"
          className="form-input"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Maqsad nomi..."
          required
        />
        <div className="edit-form-row">
          <select 
            className="form-select"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          >
            <option value="Til o‘rganish">Til o‘rganish</option>
            <option value="Kasbiy ko‘nikma">Kasbiy ko‘nikma</option>
            <option value="Karyera">Karyera</option>
            <option value="Mantiqiy rivojlanish">Mantiqiy rivojlanish</option>
            <option value="Shaxsiy rivojlanish">Shaxsiy rivojlanish</option>
          </select>

          <select
            className="form-select"
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
          >
            <option value="Yuqori">Yuqori muhimlik</option>
            <option value="O‘rta">O‘rta muhimlik</option>
            <option value="Past">Past muhimlik</option>
          </select>

          <input
            type="date"
            className="form-input"
            value={editDeadline}
            onChange={(e) => setEditDeadline(e.target.value)}
          />
        </div>
        <div className="edit-form-actions">
          <button type="submit" className="btn-save-sm">
            <Check size={14} /> Saqlash
          </button>
          <button type="button" className="btn-cancel-sm" onClick={handleCancelEdit}>
            <X size={14} /> Bekor qilish
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className={`goal-card ${goal.completed ? 'goal-card-completed' : ''}`}>
      {/* Checkbox button */}
      <button
        type="button"
        className="goal-toggle-btn"
        onClick={() => toggleGoal(goal.id)}
        aria-label={goal.completed ? "Bajarilmagan deb belgilash" : "Bajarildi deb belgilash"}
      >
        {goal.completed ? (
          <CheckCircle2 size={22} className="goal-check-active" />
        ) : (
          <Circle size={22} className="goal-check-idle" />
        )}
      </button>

      {/* Goal Main Content */}
      <div className="goal-content">
        <h4 className={`goal-title ${goal.completed ? 'title-completed' : ''}`}>
          {goal.title}
        </h4>

        <div className="goal-meta-row">
          {goal.category && (
            <span className="goal-category-badge">{goal.category}</span>
          )}

          {goal.priority && (
            <span className={`goal-priority-badge ${priorityColors[goal.priority] || 'priority-medium'}`}>
              {goal.priority}
            </span>
          )}

          {goal.deadline && (
            <span className="goal-deadline">
              <Calendar size={13} />
              {formatDateUz(goal.deadline)}
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="goal-actions">
        <button
          type="button"
          className="goal-action-btn edit-btn"
          onClick={() => setIsEditing(true)}
          title="Tahrirlash"
          aria-label="Tahrirlash"
        >
          <Edit3 size={16} />
        </button>

        <button
          type="button"
          className="goal-action-btn delete-btn"
          onClick={() => deleteGoal(goal.id)}
          title="O‘chirish"
          aria-label="O‘chirish"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
