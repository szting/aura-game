export interface ColorInterpretation {
  id: string;
  color: string;
  name: string;
  interpretation: {
    emotional_state: string;
    key_insights: string[];
    conversation_starters: string[];
    coaching_notes: string;
  };
}

export interface GameState {
  selectedColor: string | null;
  showInterpretation: boolean;
  isAdminMode: boolean;
}
