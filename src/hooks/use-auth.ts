
"use client";

import { useState, useEffect, useCallback } from 'react';

const AUTH_TOKEN_KEY = 'brokou_auth_token';

const setCookie = (name: string, value: string, days: number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const eraseCookie = (name: string) => {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}


export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedToken = getCookie(AUTH_TOKEN_KEY);
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
        console.error("Could not access cookies", error);
    } finally {
        setIsLoading(false);
    }
  }, []);

  const login = useCallback((newToken: string) => {
    try {
        setCookie(AUTH_TOKEN_KEY, newToken, 1);
        setToken(newToken);
    } catch (error) {
        console.error("Could not set cookie", error);
    }
  }, []);

  const logout = useCallback(() => {
    try {
        eraseCookie(AUTH_TOKEN_KEY);
        setToken(null);
    } catch (error) {
        console.error("Could not remove cookie", error);
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
