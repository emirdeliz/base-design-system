import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  dataTestId?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  error?: boolean;
  success?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  wFull?: boolean;
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
  my?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  px?: string;
  py?: string;
  maxWidth?: string;
}

export const Input = ({
  dataTestId = 'input-atom',
  variant = 'primary',
  error = false,
  success = false,
  rounded = false,
  outlined = false,
  wFull = false,
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
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  maxWidth,
  className,
  disabled,
  ...props
}: InputProps) => {
  const sizeClasses = xs
    ? 'px-2 py-1 text-xs'
    : sm
    ? 'px-3 py-1.5 text-sm'
    : nm
    ? 'px-4 py-2 text-sm'
    : lg
    ? 'px-6 py-3 text-base'
    : xl
    ? 'px-8 py-4 text-lg'
    : 'px-4 py-2 text-sm';

  const widthClasses = wFull ? 'w-full' : 'w-auto';
  const radiusClasses = rounded ? 'rounded-lg' : 'rounded-md';

  const getVariantClasses = () => {
    if (error) {
      return outlined
        ? 'border-red-500 text-red-700 focus:border-red-600 focus:ring-red-500'
        : 'border-red-500 bg-red-50 text-red-900 placeholder-red-400 focus:border-red-600 focus:ring-red-500';
    }
    if (success) {
      return outlined
        ? 'border-green-500 text-green-700 focus:border-green-600 focus:ring-green-500'
        : 'border-green-500 bg-green-50 text-green-900 placeholder-green-400 focus:border-green-600 focus:ring-green-500';
    }

    const variantColorMap = {
      primary: outlined
        ? 'border-blue-600 text-blue-700 focus:border-blue-700 focus:ring-blue-500'
        : 'border-blue-300 bg-white text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-blue-500',
      secondary: outlined
        ? 'border-gray-600 text-gray-700 focus:border-gray-700 focus:ring-gray-500'
        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-gray-600 focus:ring-gray-500',
      success: outlined
        ? 'border-green-600 text-green-700 focus:border-green-700 focus:ring-green-500'
        : 'border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:border-green-600 focus:ring-green-500',
      danger: outlined
        ? 'border-red-600 text-red-700 focus:border-red-700 focus:ring-red-500'
        : 'border-red-300 bg-white text-gray-900 placeholder-gray-400 focus:border-red-600 focus:ring-red-500',
      warning: outlined
        ? 'border-yellow-600 text-yellow-700 focus:border-yellow-700 focus:ring-yellow-500'
        : 'border-yellow-300 bg-white text-gray-900 placeholder-gray-400 focus:border-yellow-600 focus:ring-yellow-500',
      info: outlined
        ? 'border-cyan-600 text-cyan-700 focus:border-cyan-700 focus:ring-cyan-500'
        : 'border-cyan-300 bg-white text-gray-900 placeholder-gray-400 focus:border-cyan-600 focus:ring-cyan-500',
    };

    return variantColorMap[variant];
  };

  const borderClasses = outlined ? 'border-2' : 'border';
  const opacityClasses = disabled ? 'opacity-50' : 'opacity-100';
  const cursorClasses = disabled ? 'cursor-not-allowed' : 'cursor-text';

  const marginClasses = [
    m && `m-${m}`,
    mt && `mt-${mt}`,
    mr && `mr-${mr}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
  ]
    .filter(Boolean)
    .join(' ');

  const paddingClasses = [
    p && `p-${p}`,
    pt && `pt-${pt}`,
    pr && `pr-${pr}`,
    pb && `pb-${pb}`,
    pl && `pl-${pl}`,
    px && `px-${px}`,
    py && `py-${py}`,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'block',
    'font-poppins',
    sizeClasses,
    widthClasses,
    radiusClasses,
    borderClasses,
    opacityClasses,
    cursorClasses,
    marginClasses,
    paddingClasses,
    getVariantClasses(),
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'placeholder:text-gray-400',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      {...props}
      data-testid={dataTestId}
      disabled={disabled}
      className={`${inputClasses} ${maxWidth ? `max-w-[${maxWidth}]` : ''}`}
    />
  );
};

Input.Outlined = (props: InputProps) => <Input {...props} outlined />;
Input.Rounded = (props: InputProps) => <Input {...props} rounded />;
Input.Error = (props: InputProps) => <Input {...props} error />;
Input.Success = (props: InputProps) => <Input {...props} success />;

