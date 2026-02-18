import { useDensity } from '../../contexts/DensityContext';
import { ButtonProps } from './Button.types';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size: propSize,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const { mode } = useDensity();
  
  const size = propSize || (mode === 'compact' ? 'sm' : 'lg');
  
  const classNames = [
    'norri-button',
    `norri-button--variant-${variant}`,
    `norri-button--size-${size}`,
    fullWidth ? 'norri-button--full-width' : '',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};