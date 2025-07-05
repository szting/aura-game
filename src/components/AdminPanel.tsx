import React, { useState } from 'react';
import { ColorInterpretation } from '../types';
import { colorInterpretations } from '../data/colorInterpretations';
import { Edit3, Save, X, Plus, Trash2, Sparkles } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [editingColor, setEditingColor] = useState<string | null>(null);
  const [interpretations, setInterpretations] = useState<ColorInterpretation[]>(colorInterpretations);
  const [editForm, setEditForm] = useState<ColorInterpretation | null>(null);

  const startEditing = (interpretation: ColorInterpretation) => {
    setEditingColor(interpretation.id);
    setEditForm({ ...interpretation });
  };

  const saveChanges = () => {
    if (!editForm) return;
    
    setInterpretations(prev => 
      prev.map(interp => interp.id === editForm.id ? editForm : interp)
    );
    setEditingColor(null);
    setEditForm(null);
  };

  const cancelEditing = () => {
    setEditingColor(null);
    setEditForm(null);
  };

  const updateFormField = (field: string, value: any) => {
    if (!editForm) return;
    
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setEditForm({
        ...editForm,
        interpretation: {
          ...editForm.interpretation,
          [child]: value
        }
      });
    } else {
      setEditForm({
        ...editForm,
        [field]: value
      });
    }
  };

  const addInsight = () => {
    if (!editForm) return;
    setEditForm({
      ...editForm,
      interpretation: {
        ...editForm.interpretation,
        key_insights: [...editForm.interpretation.key_insights, '']
      }
    });
  };

  const removeInsight = (index: number) => {
    if (!editForm) return;
    setEditForm({
      ...editForm,
      interpretation: {
        ...editForm.interpretation,
        key_insights: editForm.interpretation.key_insights.filter((_, i) => i !== index)
      }
    });
  };

  const updateInsight = (index: number, value: string) => {
    if (!editForm) return;
    const newInsights = [...editForm.interpretation.key_insights];
    newInsights[index] = value;
    setEditForm({
      ...editForm,
      interpretation: {
        ...editForm.interpretation,
        key_insights: newInsights
      }
    });
  };

  const addConversationStarter = () => {
    if (!editForm) return;
    setEditForm({
      ...editForm,
      interpretation: {
        ...editForm.interpretation,
        conversation_starters: [...editForm.interpretation.conversation_starters, '']
      }
    });
  };

  const removeConversationStarter = (index: number) => {
    if (!editForm) return;
    setEditForm({
      ...editForm,
      interpretation: {
        ...editForm.interpretation,
        conversation_starters: editForm.interpretation.conversation_starters.filter((_, i) => i !== index)
      }
    });
  };

  const updateConversationStarter = (index: number, value: string) => {
    if (!editForm) return;
    const newStarters = [...editForm.interpretation.conversation_starters];
    newStarters[index] = value;
    setEditForm({
      ...editForm,
      interpretation: {
        ...editForm.interpretation,
        conversation_starters: newStarters
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-teal-200">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">AURA Admin Panel</h2>
                <p className="text-teal-600 font-medium">Edit Color Interpretations</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
          </div>

          <div className="grid gap-6">
            {interpretations.map((interpretation) => (
              <div key={interpretation.id} className="border border-teal-200 rounded-2xl p-6 bg-gradient-to-r from-white to-teal-50/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl shadow-lg border-2 border-white"
                      style={{ backgroundColor: interpretation.color }}
                    />
                    <h3 className="text-xl font-semibold text-gray-900">{interpretation.name}</h3>
                  </div>
                  <button
                    onClick={() => startEditing(interpretation)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </button>
                </div>

                {editingColor === interpretation.id && editForm ? (
                  <div className="space-y-6 bg-teal-50/50 rounded-xl p-6 border border-teal-100">
                    {/* Emotional State */}
                    <div>
                      <label className="block text-sm font-medium text-teal-800 mb-2">
                        Emotional State
                      </label>
                      <input
                        type="text"
                        value={editForm.interpretation.emotional_state}
                        onChange={(e) => updateFormField('interpretation.emotional_state', e.target.value)}
                        className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Key Insights */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-teal-800">
                          Key Insights
                        </label>
                        <button
                          onClick={addInsight}
                          className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 text-sm shadow-lg"
                        >
                          <Plus className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                      <div className="space-y-2">
                        {editForm.interpretation.key_insights.map((insight, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={insight}
                              onChange={(e) => updateInsight(index, e.target.value)}
                              className="flex-1 px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                            />
                            <button
                              onClick={() => removeInsight(index)}
                              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conversation Starters */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-teal-800">
                          Conversation Starters
                        </label>
                        <button
                          onClick={addConversationStarter}
                          className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 text-sm shadow-lg"
                        >
                          <Plus className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                      <div className="space-y-2">
                        {editForm.interpretation.conversation_starters.map((starter, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={starter}
                              onChange={(e) => updateConversationStarter(index, e.target.value)}
                              className="flex-1 px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                            />
                            <button
                              onClick={() => removeConversationStarter(index)}
                              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Coaching Notes */}
                    <div>
                      <label className="block text-sm font-medium text-teal-800 mb-2">
                        Coaching Notes
                      </label>
                      <textarea
                        value={editForm.interpretation.coaching_notes}
                        onChange={(e) => updateFormField('interpretation.coaching_notes', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={saveChanges}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="flex items-center gap-2 px-6 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors shadow-lg"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-600">
                    <p className="mb-2"><strong>Emotional State:</strong> {interpretation.interpretation.emotional_state}</p>
                    <p className="mb-2"><strong>Key Insights:</strong> {interpretation.interpretation.key_insights.length} items</p>
                    <p className="mb-2"><strong>Conversation Starters:</strong> {interpretation.interpretation.conversation_starters.length} items</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
