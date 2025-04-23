
import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const EmpathHero = () => {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center items-center mb-4">
        <Heart className="text-teal-500 mr-2" size={32} />
        <MessageCircle className="text-blue-500" size={32} />
      </div>
      
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 mb-6">
        Resolve Conflict with Compassion. 
        Empower Peace with AI.
      </h1>
      
      <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
        EmpathAI is the world's first emotional intelligence AI trained to mediate disputes, 
        heal communities, and turn conflict into connection.
      </h2>
      
      <div className="mt-8">
        <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all">
          Start a Guided Dialogue
        </button>
      </div>
    </div>
  );
};

export default EmpathHero;
