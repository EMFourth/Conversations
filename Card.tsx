import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// FIX: Removed explicit JSX.Element return type to fix "Cannot find namespace 'JSX'" error.
function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-slate-800/50 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700/50 rounded-lg p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default Card;