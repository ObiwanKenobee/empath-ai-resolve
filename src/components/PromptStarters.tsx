
import React from 'react';

const promptExamples = [
  "My sister and I haven't spoken in months...",
  "There's tension at work I don't know how to resolve...",
  "Our neighborhood is divided over a recent incident..."
];

const PromptStarters = () => {
  return (
    <div className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Tell us about a conflict you're facing
      </h3>
      
      <p className="text-center text-gray-600 mb-8">
        EmpathAI will listen, understand emotional tone, and help you co-create a peaceful path forward—with heart and clarity.
      </p>
      
      <div className="space-y-4">
        {promptExamples.map((prompt, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 text-gray-700 hover:bg-opacity-80 transition-all cursor-pointer"
          >
            "{prompt}"
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptStarters;
