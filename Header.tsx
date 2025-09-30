import React from 'react';

const MessageSquareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-500">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

// FIX: Removed explicit JSX.Element return type to fix "Cannot find namespace 'JSX'" error.
function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <MessageSquareIcon />
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Difficult Conversation Planner
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;