import React, { useState } from 'react';
import { ColorPalette } from './components/ColorPalette';
import { ColorInterpretationDisplay } from './components/ColorInterpretationDisplay';
import { AdminPanel } from './components/AdminPanel';
import { LoginModal } from './components/LoginModal';
import { useAuth } from './hooks/useAuth';
import { getColorInterpretation } from './data/colorInterpretations';
import { GameState } from './types';
import { Palette, Settings, RotateCcw, Users, Sparkles } from 'lucide-react';

function App() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const [gameState, setGameState] = useState<GameState>({
    selectedColor: null,
    showInterpretation: false,
    isAdminMode: false
  });
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState<string>('');

  const handleColorSelect = (colorId: string) => {
    setGameState(prev => ({
      ...prev,
      selectedColor: colorId,
      showInterpretation: true
    }));
  };

  const handleCloseInterpretation = () => {
    setGameState(prev => ({
      ...prev,
      showInterpretation: false
    }));
  };

  const handleReset = () => {
    setGameState({
      selectedColor: null,
      showInterpretation: false,
      isAdminMode: false
    });
  };

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setGameState(prev => ({
        ...prev,
        isAdminMode: true
      }));
    } else {
      setShowLogin(true);
      setLoginError('');
    }
  };

  const handleLogin = (password: string) => {
    const success = login(password);
    if (success) {
      setShowLogin(false);
      setLoginError('');
      setGameState(prev => ({
        ...prev,
        isAdminMode: true
      }));
    } else {
      setLoginError('Invalid password. Please try again.');
    }
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    setLoginError('');
  };

  const selectedInterpretation = gameState.selectedColor 
    ? getColorInterpretation(gameState.selectedColor)
    : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          <p className="text-teal-600 font-medium">Loading AURA...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-teal-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  AURA
                </h1>
                <p className="text-sm text-teal-700 font-medium">
                  <span className="font-semibold">A</span>wareness <span className="font-semibold">U</span>nlocked <span className="font-semibold">R</span>eflectively <span className="font-semibold">A</span>ligned
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button
                onClick={handleAdminClick}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Settings className="w-4 h-4" />
                Admin
                {isAuthenticated && (
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!gameState.selectedColor ? (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 mb-8 border border-teal-200">
              <Users className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">Coach Screen Sharing Mode</span>
            </div>
            
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choose Your Color
              </h2>
              <div className="inline-flex items-center gap-2 text-teal-600 font-medium text-lg mb-6">
                <Sparkles className="w-5 h-5" />
                <span>Discover your inner awareness</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              Select the color that best represents how you're feeling right now. 
              Trust your instinct and choose the one that draws you in.
            </p>
            
            <ColorPalette 
              selectedColor={gameState.selectedColor}
              onColorSelect={handleColorSelect}
            />
            
            <div className="mt-12 text-center">
              <p className="text-teal-600 text-sm font-medium">
                Take your time. There are no right or wrong answers.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8 border border-teal-200 shadow-lg">
              <div 
                className="w-8 h-8 rounded-lg shadow-md"
                style={{ backgroundColor: selectedInterpretation?.color }}
              />
              <span className="text-lg font-semibold text-gray-900">
                You selected {selectedInterpretation?.name}
              </span>
            </div>
            
            <button
              onClick={() => setGameState(prev => ({ ...prev, showInterpretation: true }))}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
            >
              Reveal Your AURA
            </button>
            
            <div className="mt-8">
              <button
                onClick={handleReset}
                className="text-teal-600 hover:text-teal-800 underline font-medium"
              >
                Choose a different color
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onLogin={handleLogin}
          onClose={handleCloseLogin}
          error={loginError}
        />
      )}

      {/* Interpretation Modal */}
      {gameState.showInterpretation && selectedInterpretation && (
        <ColorInterpretationDisplay
          interpretation={selectedInterpretation}
          onClose={handleCloseInterpretation}
        />
      )}

      {/* Admin Panel */}
      {gameState.isAdminMode && isAuthenticated && (
        <AdminPanel onClose={() => setGameState(prev => ({ ...prev, isAdminMode: false }))} />
      )}

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-teal-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                AURA
              </span>
            </div>
            <p className="text-sm text-teal-700 font-medium mb-2">
              Professional color therapy icebreaker for life coaches and career advisers
            </p>
            <p className="text-xs text-teal-600">
              <span className="font-semibold">A</span>wareness <span className="font-semibold">U</span>nlocked <span className="font-semibold">R</span>eflectively <span className="font-semibold">A</span>ligned
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
