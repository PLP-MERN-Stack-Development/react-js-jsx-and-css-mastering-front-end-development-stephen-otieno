import { useState, useEffect } from 'react';

/**
 * useLocalStorage - a small hook to persist state to localStorage
 * @param {string} key - localStorage key
 * @param {any} initialValue - initial state value or function that returns it
 */
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : (typeof initialValue === 'function' ? initialValue() : initialValue);
    } catch (e) {
      console.error('useLocalStorage read error', e);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error('useLocalStorage write error', e);
    }
  }, [key, state]);

  return [state, setState];
}
