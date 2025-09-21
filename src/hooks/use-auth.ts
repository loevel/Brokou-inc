"use client";

import { useState, useEffect, useCallback } from 'react';

const AUTH_TOKEN_KEY = 'brokou_auth_token';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(AUTH_TOKEN_KEY);
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
        console.error("Could not access localStorage", error);
    } finally {
        setIsLoading(false);
    }
  }, []);

  const login = useCallback((newToken: string) => {
    try {
        localStorage.setItem(AUTH_TOKEN_KEY, newToken);
        setToken(newToken);
    } catch (error) {
        console.error("Could not set item to localStorage", error);
    }
  }, []);

  const logout = useCallback(() => {
    try {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        setToken(null);
    } catch (error) {
        console.error("Could not remove item from localStorage", error);
    }
  }, []);

  return {
    token,
    login,
    logout,
    isAuthenticated: !!token,
    isLoading,
  };
};
