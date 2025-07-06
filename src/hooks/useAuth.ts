import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'aura2024';
const SESSION_KEY = 'aura_admin_session';
const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

interface AuthSession {
  timestamp: number;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = () => {
    try {
      const sessionData = localStorage.getItem(SESSION_KEY);
      if (sessionData) {
        const session: AuthSession = JSON.parse(sessionData);
        const now = Date.now();
        
        if (session.isAuthenticated && (now - session.timestamp) < SESSION_DURATION) {
          setIsAuthenticated(true);
        } else {
          // Session expired
          localStorage.removeItem(SESSION_KEY);
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
      localStorage.removeItem(SESSION_KEY);
    }
    setIsLoading(false);
  };

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      const session: AuthSession = {
        timestamp: Date.now(),
        isAuthenticated: true
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  const extendSession = () => {
    if (isAuthenticated) {
      const session: AuthSession = {
        timestamp: Date.now(),
        isAuthenticated: true
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
    extendSession
  };
};
