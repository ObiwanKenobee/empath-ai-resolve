
import React from 'react';
import EmpathHero from '@/components/EmpathHero';
import PromptStarters from '@/components/PromptStarters';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 text-gray-800">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <EmpathHero />
        <PromptStarters />
      </div>
    </div>
  );
};

export default Index;
