import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T, expiryMinutes: number = 15) {
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const { value, timestamp } = JSON.parse(item);
        const now = new Date().getTime();
        const expiryTime = timestamp + (expiryMinutes * 60 * 1000);
        
        if (now < expiryTime) {
          return value;
        } else {
          window.localStorage.removeItem(key);
        }
      }
      return initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      const item = {
        value: valueToStore,
        timestamp: new Date().getTime()
      };
      
      window.localStorage.setItem(key, JSON.stringify(item));
      setStoredValue(valueToStore);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}