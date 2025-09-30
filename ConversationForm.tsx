import React from 'react';
import { ConversationFormData } from '../types';
import Card from './ui/Card';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import { UsersIcon, FileTextIcon, CalendarClockIcon, HelpCircleIcon, TrophyIcon } from './Icons';

interface ConversationFormProps {
  formData: ConversationFormData;
  setFormData: React.Dispatch<React.SetStateAction<ConversationFormData>>;
  onSubmit: () => void;
  isLoading: boolean;
}

const formSections = [
    {
        name: 'who',
        label: 'Who is this conversation with?',
        placeholder: 'e.g., My manager, a close friend...',
        component: Input,
        icon: <UsersIcon />,
        colors: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
        required: true,
    },
    {
        name: 'what',
        label: 'What is the conversation about?',
        placeholder: 'e.g., Asking for a raise...',
        component: Textarea,
        icon: <FileTextIcon />,
        colors: 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400',
        required: true,
    },
    {
        name: 'whenWhere',
        label: 'When & Where will it happen?',
        placeholder: 'e.g., In their office on Friday...',
        component: Input,
        icon: <CalendarClockIcon />,
        colors: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
        required: true,
    },
    {
        name: 'why',
        label: 'Why is this conversation necessary?',
        placeholder: 'e.g., To resolve a conflict...',
        component: Textarea,
        icon: <HelpCircleIcon />,
        colors: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
        required: true,
    },
    {
        name: 'outcome',
        label: 'Desired outcome? (Optional)',
        placeholder: 'e.g., To reach a mutual understanding...',
        component: Textarea,
        icon: <TrophyIcon />,
        colors: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
        required: false,
    }
];


function ConversationForm({ formData, setFormData, onSubmit, isLoading }: ConversationFormProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.who.trim() !== '' && formData.what.trim() !== '' && formData.whenWhere.trim() !== '' && formData.why.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
        onSubmit();
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center pb-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Describe the Situation</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Answer each question to build your plan.
            </p>
        </div>
        
        <div className="space-y-5">
        {formSections.map((section) => {
            const InputComponent = section.component;
            return (
                <div key={section.name} className={`p-4 rounded-lg transition-all duration-300 ${section.colors}`}>
                    <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 pt-1">{section.icon}</div>
                        <div className="flex-grow">
                             <InputComponent
                                label={section.label}
                                name={section.name}
                                value={formData[section.name as keyof ConversationFormData]}
                                onChange={handleChange}
                                placeholder={section.placeholder}
                                required={section.required}
                                rows={section.name === 'what' || section.name === 'why' ? 3 : 2}
                                className="bg-transparent dark:bg-transparent focus:ring-0 border-none p-0"
                                labelClassName="font-semibold !text-sm"
                            />
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
        
        <div className="pt-4">
            <Button type="submit" disabled={!isFormValid || isLoading} fullWidth>
                {isLoading ? 'Generating Plan...' : 'Generate Conversation Plan'}
            </Button>
        </div>
      </form>
    </Card>
  );
}

export default ConversationForm;