import React from 'react';

const iconProps = {
  className: "h-6 w-6",
  strokeWidth: "1.5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

// Plan Display Icons
export const BrainCircuitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 12a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m-7-9H3m18 0h-2m-5.5-5.5L6.34 6.34m11.32 11.32L15.5 15.5" />
    </svg>
);

export const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.25l-2.5 2.5m2.5-11l-2.5-2.5m11 11l-2.5 2.5m2.5-11l-2.5-2.5M12 4.5v-3m0 18v-3m-7.5-6h-3m18 0h-3" />
    </svg>
);

export const ListChecksIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H4m5 6H4m5 6H4m11-9l-3 3-1.5-1.5M16 17l-3 3-1.5-1.5" />
    </svg>
);

export const ShieldAlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c-4.42 0-8-3.58-8-8V5.5l8-4 8 4v8c0 4.42-3.58 8-8 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6m0 4h.01" />
    </svg>
);

export const GoalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v-2m-7-5H3m18 0h-2" />
    </svg>
);


// Form Icons
const formIconProps = {
  className: "h-5 w-5",
  strokeWidth: "2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

export const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...formIconProps}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
export const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...formIconProps}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
);
export const CalendarClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...formIconProps}><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h5" /><path d="M17.5 17.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0" /><path d="M17.5 14v4h-2" /></svg>
);
export const HelpCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...formIconProps}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
);
export const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" {...formIconProps}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);