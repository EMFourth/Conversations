import React from 'react';

// FIX: Added name to props to fix type error.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  labelClassName?: string;
}

// FIX: Removed explicit JSX.Element return type to fix "Cannot find namespace 'JSX'" error.
function Input({ label, name, className, labelClassName, ...props }: InputProps) {
  const baseInputClasses = "block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500";
  const baseLabelClasses = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";
  
  return (
    <div>
      <label htmlFor={name} className={`${baseLabelClasses} ${labelClassName}`}>
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        className={`${baseInputClasses} ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;