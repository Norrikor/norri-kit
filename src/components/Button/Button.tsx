import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        background: variant === 'primary' ? '#8b5cf6' : '#e2e8f0',
        color: variant === 'primary' ? 'white' : 'black',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
