import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { ConversationPlan, PlanSection, NavigatingReactionsSection } from '../types';
import { BrainCircuitIcon, SparklesIcon, ListChecksIcon, ShieldAlertIcon, GoalIcon } from './Icons';

interface PlanDisplayProps {
  plan: string | null;
  isLoading: boolean;
  error: string | null;
  onReset: () => void;
}

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
        <p className="text-slate-500 dark:text-slate-400">Crafting your conversation strategy...</p>
    </div>
);

const InitialState = () => (
    <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/50">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sky-600 dark:text-sky-400"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M12 12a4 4 0 0 0 0 8 4 4 0 0 0 0-8Z"/></svg>
        </div>
        <h3 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">Your Conversation Plan</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Fill out the form to generate a personalized, AI-powered plan for your difficult conversation.
        </p>
    </div>
);

const sectionStyles = {
    mindset: { icon: <BrainCircuitIcon />, color: 'indigo', },
    openingStatement: { icon: <SparklesIcon />, color: 'sky' },
    talkingPoints: { icon: <ListChecksIcon />, color: 'blue' },
    navigatingReactions: { icon: <ShieldAlertIcon />, color: 'amber' },
    closing: { icon: <GoalIcon />, color: 'emerald' },
};

const getColors = (color: string) => {
    switch (color) {
        case 'indigo': return { border: 'border-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-500 dark:text-indigo-400' };
        case 'sky': return { border: 'border-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20', text: 'text-sky-500 dark:text-sky-400' };
        case 'blue': return { border: 'border-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-500 dark:text-blue-400' };
        case 'amber': return { border: 'border-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', text: 'text-amber-500 dark:text-amber-400' };
        case 'emerald': return { border: 'border-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-500 dark:text-emerald-400' };
        default: return { border: 'border-slate-500', bg: 'bg-slate-50 dark:bg-slate-900/20', text: 'text-slate-500 dark:text-slate-400' };
    }
}

const PlanSectionCard = ({ section, config, pointsAsQuotes = false }: { section: PlanSection, config: { icon: React.ReactNode, color: string }, pointsAsQuotes?: boolean }) => {
    const { border, bg, text } = getColors(config.color);
    return (
        <div className={`p-4 rounded-lg border-l-4 ${border} ${bg} `}>
            <div className="flex items-center space-x-3">
                <span className={text}>{config.icon}</span>
                <h3 className="text-md font-semibold text-slate-800 dark:text-slate-200">{section.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{section.summary}</p>
            {section.points && (
                pointsAsQuotes ? (
                    <div className="mt-3 space-y-2">
                        {section.points.map((p, i) => (
                            <blockquote key={i} className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-700 dark:text-slate-300">
                                "{p}"
                            </blockquote>
                        ))}
                    </div>
                ) : (
                    <ul className="mt-3 list-disc list-inside space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                        {section.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                )
            )}
            {section.phrases && (
                <div className="mt-3 space-y-2">
                    {section.phrases.map((p, i) => (
                        <blockquote key={i} className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-sm text-slate-700 dark:text-slate-300">
                            "{p}"
                        </blockquote>
                    ))}
                </div>
            )}
        </div>
    );
};
const NavigatingReactionsCard = ({ section, config }: { section: NavigatingReactionsSection, config: { icon: React.ReactNode, color: string } }) => {
    const { border, bg, text } = getColors(config.color);
    return (
         <div className={`p-4 rounded-lg border-l-4 ${border} ${bg} `}>
            <div className="flex items-center space-x-3">
                <span className={text}>{config.icon}</span>
                <h3 className="text-md font-semibold text-slate-800 dark:text-slate-200">{section.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{section.summary}</p>
            <div className="mt-3 space-y-3">
                {section.reactions.map((r, i) => (
                    <div key={i}>
                        <p className="font-semibold text-sm text-slate-700 dark:text-slate-300">{r.reaction}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{r.strategy}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

const StructuredPlan = ({ planData }: { planData: ConversationPlan }) => (
    <div className="space-y-6 animate-fade-in">
        <PlanSectionCard section={planData.mindset} config={sectionStyles.mindset} />
        <PlanSectionCard section={planData.openingStatement} config={sectionStyles.openingStatement} />
        <PlanSectionCard section={planData.talkingPoints} config={sectionStyles.talkingPoints} pointsAsQuotes={true} />
        <NavigatingReactionsCard section={planData.navigatingReactions} config={sectionStyles.navigatingReactions} />
        <PlanSectionCard section={planData.closing} config={sectionStyles.closing} />
    </div>
);


const FallbackPlan = ({ plan }: { plan: string }) => {
    const lines = plan.split('\n').filter(line => line.trim() !== '');
    return (
        <div className="prose prose-slate dark:prose-invert max-w-none">
            {lines.map((line, index) => {
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-lg font-semibold mt-6 mb-3">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('- ') || line.startsWith('* ')) {
                    return <li key={index} className="ml-4">{line.slice(2)}</li>;
                }
                return <p key={index} className="my-2">{line}</p>;
            })}
        </div>
    );
};

function PlanDisplay({ plan, isLoading, error, onReset }: PlanDisplayProps) {
  const hasContent = plan || isLoading || error;

  let parsedPlan: ConversationPlan | null = null;
  if (plan && !isLoading) {
    try {
        // The Gemini API might wrap the JSON in ```json ... ```, so we need to clean it.
        const cleanedPlan = plan.replace(/^```json\s*|```\s*$/g, '');
        parsedPlan = JSON.parse(cleanedPlan);
    } catch (e) {
        console.error("Failed to parse plan JSON:", e);
    }
  }
  
  return (
    <Card className={`min-h-[400px] flex flex-col transition-all duration-300 ${!hasContent ? 'items-center justify-center' : ''}`}>
         <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
            }
        `}</style>
        {hasContent && (
             <div className="flex justify-between items-center mb-4 border-b border-slate-200 dark:border-slate-700 pb-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Your AI-Generated Plan</h2>
                <Button onClick={onReset} variant="outline" size="sm">
                    Start Over
                </Button>
            </div>
        )}

        <div className="flex-grow flex items-center justify-center">
            {isLoading && <LoadingSpinner />}
            {error && (
                <div className="text-center text-red-500">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm">{error}</p>
                </div>
            )}
            {plan && !isLoading && parsedPlan && <StructuredPlan planData={parsedPlan} />}
            {plan && !isLoading && !parsedPlan && <FallbackPlan plan={plan} />}
            {!isLoading && !plan && !error && <InitialState />}
        </div>
    </Card>
  );
}

export default PlanDisplay;