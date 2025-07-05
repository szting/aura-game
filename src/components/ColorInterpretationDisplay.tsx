import React from 'react';
import { ColorInterpretation } from '../types';
import { MessageCircle, Lightbulb, Heart, FileText, Sparkles } from 'lucide-react';

interface ColorInterpretationDisplayProps {
  interpretation: ColorInterpretation;
  onClose: () => void;
}

export const ColorInterpretationDisplay: React.FC<ColorInterpretationDisplayProps> = ({ 
  interpretation, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal-200">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-2xl shadow-lg border-2 border-white"
                style={{ backgroundColor: interpretation.color }}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-3xl font-bold text-gray-900">{interpretation.name}</h2>
                  <div className="flex items-center gap-1 text-teal-600">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-semibold">AURA</span>
                  </div>
                </div>
                <p className="text-lg text-teal-700 font-medium">{interpretation.interpretation.emotional_state}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Insights */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Key Insights</h3>
              </div>
              <ul className="space-y-3">
                {interpretation.interpretation.key_insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conversation Starters */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Conversation Starters</h3>
              </div>
              <ul className="space-y-3">
                {interpretation.interpretation.conversation_starters.map((starter, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed italic">"{starter}"</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coaching Notes */}
          <div className="mt-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Coaching Notes</h3>
            </div>
            <p className="text-gray-700 leading-relaxed bg-white/60 rounded-xl p-4 border border-teal-100">
              {interpretation.interpretation.coaching_notes}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-teal-200">
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue Conversation
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-4 border-2 border-teal-300 text-teal-700 rounded-2xl font-semibold hover:border-teal-400 hover:bg-teal-50 transition-all duration-300"
            >
              Print Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
