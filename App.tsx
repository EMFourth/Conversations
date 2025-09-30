import React, { useState, useCallback } from 'react';
import { ConversationFormData } from './types';
import { generateConversationPlan } from './services/geminiService';
import Header from './components/Header';
import ConversationForm from './components/ConversationForm';
import PlanDisplay from './components/PlanDisplay';
import Footer from './components/Footer';

// FIX: Removed explicit JSX.Element return type to fix "Cannot find namespace 'JSX'" error.
function App() {
  const [formData, setFormData] = useState<ConversationFormData>({
    who: '',
    what: '',
    whenWhere: '',
    why: '',
    outcome: '',
  });
  const [plan, setPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPlan(null);

    try {
      const generatedPlan = await generateConversationPlan(formData);
      setPlan(generatedPlan);
    } catch (err) {
      setError('An error occurred while generating the plan. Please check your API key and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [formData]);
  
  const handleReset = () => {
    setFormData({
        who: '',
        what: '',
        whenWhere: '',
        why: '',
        outcome: '',
    });
    setPlan(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-200">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <ConversationForm 
              formData={formData} 
              setFormData={setFormData}
              onSubmit={handleGeneratePlan}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:col-span-7">
            <PlanDisplay 
              plan={plan}
              isLoading={isLoading}
              error={error}
              onReset={handleReset}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;