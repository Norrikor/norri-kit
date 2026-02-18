export interface ButtonProps {
  /** Содержимое кнопки */
  children: React.ReactNode;
  /** Вариант кнопки */
  variant?: 'primary' | 'secondary';
  /** Размер кнопки (если не указан, определяется из режима плотности) */
  size?: 'sm' | 'md' | 'lg';
  /** Растянуть на всю ширину */
  fullWidth?: boolean;
  /** Отключена */
  disabled?: boolean;
  /** Обработчик клика */
  onClick?: () => void;
  /** Тип кнопки */
  type?: 'button' | 'submit' | 'reset';
  /** Дополнительные CSS-классы */
  className?: string;
}