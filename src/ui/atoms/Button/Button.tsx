import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  dataTestId?: string;
  clickable?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  wFull?: boolean;
  link?: boolean;
  circle?: boolean;
  maxWidth?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  xs?: boolean;
  sm?: boolean;
  nm?: boolean;
  lg?: boolean;
  xl?: boolean;
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mx?: string;
  my?: boolean;
  default?: boolean;
}

export const Button = ({
  children,
  dataTestId = 'button-atom',
  clickable = true,
  onClick,
  title,
  type = 'button',
  rounded = false,
  outlined = false,
  wFull = false,
  circle = false,
  maxWidth,
  variant = 'primary',
  xs = false,
  sm = false,
  nm = false,
  lg = false,
  xl = false,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  default: defaultVariant = false,
  ...props
}: ButtonProps) => {
  const sizeClasses = xs ? 'px-2 py-1 text-xs' : 
                     sm ? 'px-3 py-1.5 text-sm' : 
                     nm ? 'px-4 py-2 text-sm' :
                     lg ? 'px-6 py-3 text-base' : 
                     xl ? 'px-8 py-4 text-lg' : 'px-4 py-2 text-sm';
  
  const widthClasses = wFull ? 'w-full' : 'w-auto';
  const radiusClasses = circle ? 'rounded-full' : rounded ? 'rounded-lg' : 'rounded-md';
  
  const variantClasses = {
    primary: outlined ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: outlined ? 'border-gray-600 text-gray-600 hover:bg-gray-50' : 'bg-gray-600 text-white hover:bg-gray-700',
    success: outlined ? 'border-green-600 text-green-600 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700',
    danger: outlined ? 'border-red-600 text-red-600 hover:bg-red-50' : 'bg-red-600 text-white hover:bg-red-700',
    warning: outlined ? 'border-yellow-600 text-yellow-600 hover:bg-yellow-50' : 'bg-yellow-600 text-white hover:bg-yellow-700',
    info: outlined ? 'border-cyan-600 text-cyan-600 hover:bg-cyan-50' : 'bg-cyan-600 text-white hover:bg-cyan-700',
  };

  const borderClasses = outlined ? 'border-2' : 'border-2 border-transparent';
  const opacityClasses = clickable ? 'opacity-100' : 'opacity-50';
  const cursorClasses = clickable ? 'cursor-pointer' : 'cursor-not-allowed';
  
  const marginClasses = [
    m && `m-${m}`,
    mt && `mt-${mt}`,
    mr && `mr-${mr}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    mx && `mx-${mx}`,
    my && 'my-2',
  ].filter(Boolean).join(' ');

  const buttonClasses = [
    'flex items-center justify-center',
    'font-medium font-poppins',
    sizeClasses,
    widthClasses,
    radiusClasses,
    borderClasses,
    opacityClasses,
    cursorClasses,
    marginClasses,
    variantClasses[variant],
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:scale-105 active:scale-95',
    outlined ? 'bg-transparent' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      {...props}
      title={title}
      disabled={!clickable}
      data-testid={dataTestId}
      type={type}
      className={`${buttonClasses} ${maxWidth ? `max-w-[${maxWidth}]` : 'max-w-full'}`}
      onClick={(e) => {
        if (clickable && onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </button>
  );
};

Button.Outlined = (props: ButtonProps) => <Button {...props} outlined />;
Button.Rounded = (props: ButtonProps) => <Button {...props} rounded />;
Button.Default = (props: ButtonProps) => <Button {...props} variant="secondary" />;
