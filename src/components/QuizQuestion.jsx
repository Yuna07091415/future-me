import React from 'react';
import { Check } from 'lucide-react';

export default function QuizQuestion({ question, selectedOptionIndex, onSelectOption, totalQuestions }) {
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="quiz-question-card">
      <div className="question-header">
        <div className="question-indicator-pill">
          <span className="current-q-num">{question.id}</span>
          <span className="divider-slash">/</span>
          <span className="total-q-num">{totalQuestions}</span>
        </div>
        <span className="question-context-tag">Qiziqishlar Tahlili</span>
      </div>

      <h2 className="question-title">
        {question.question}
      </h2>

      {question.subtitle && (
        <p className="question-subtitle">
          {question.subtitle}
        </p>
      )}

      <div className="options-container" role="radiogroup">
        {question.options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          const letter = optionLetters[index] || String.fromCharCode(65 + index);

          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`option-card ${isSelected ? 'option-card-selected' : ''}`}
              onClick={() => onSelectOption(index)}
            >
              <div className="option-letter-badge">
                {isSelected ? <Check size={16} className="check-icon" /> : letter}
              </div>

              <span className="option-text">
                {option.text}
              </span>

              <div className="option-glow-indicator"></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
