import React from 'react';

// FIX: Removed explicit JSX.Element return type to fix "Cannot find namespace 'JSX'" error.
function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
      <p>Powered by AI. Always use your best judgment in any conversation.</p>
    </footer>
  );
}

export default Footer;