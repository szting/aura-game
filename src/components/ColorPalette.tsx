import React from 'react';
import { colorInterpretations } from '../data/colorInterpretations';

interface ColorPaletteProps {
  selectedColor: string | null;
  onColorSelect: (colorId: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ selectedColor, onColorSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 p-6">
        {colorInterpretations.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorSelect(color.id)}
            className={`
              relative aspect-square rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl
              ${selectedColor === color.id 
                ? 'ring-4 ring-teal-500 ring-offset-4 scale-105 shadow-2xl' 
                : 'hover:ring-2 hover:ring-teal-300 hover:ring-offset-2'
              }
              ${color.id === 'white' ? 'border-2 border-gray-200' : ''}
            `}
            style={{ backgroundColor: color.color }}
            aria-label={`Select ${color.name}`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-teal-700 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {color.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
