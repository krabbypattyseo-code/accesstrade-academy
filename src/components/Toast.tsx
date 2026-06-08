'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ToastContextType {
  showToast: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
    if (timer) clearTimeout(timer);
    const t = setTimeout(() => setVisible(false), 3000);
    setTimer(t);
  }, [timer]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast${visible ? ' show' : ''}`}>{message}</div>
    </ToastContext.Provider>
  );
}
