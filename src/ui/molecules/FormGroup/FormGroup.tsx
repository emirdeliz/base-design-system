import { Label } from '@ui';
import { ReactNode } from 'react';
import { filterDOMProps } from '@helpers';

export interface FormGroupProps {
  label?: ReactNode;
  target?: string;
  labelId?: string;
  optional?: boolean;
  required?: boolean;
  fw3?: boolean;
  row?: boolean;
  errorMessage?: string;
  helpText?: string;
}

export interface FormGroupChildrenProps extends FormGroupProps {
  children?: ReactNode;
}

export const FormGroup = ({
  fw3,
  children,
  label,
  target,
  labelId,
  required,
  optional,
  errorMessage,
  helpText,
  ...props
}: FormGroupChildrenProps) => {
  const domProps = filterDOMProps(props);
  
  const formGroupClasses = [
    'mb-6',
    'transition-all duration-200',
    'group',
    'form-group',
  ].join(' ');

  const labelContainerClasses = [
    'flex items-center justify-between',
    'mb-2',
  ].join(' ');

  const requiredClasses = [
    'text-red-500 ml-1',
    'font-semibold',
    'text-lg',
  ].join(' ');

  const optionalClasses = [
    'text-gray-500 text-sm',
    'font-normal',
    'bg-gray-100 px-2 py-1 rounded-md',
  ].join(' ');

  const errorClasses = [
    'text-red-500 text-sm',
    'mt-2 font-medium',
    'bg-red-50 border border-red-200 rounded-lg px-3 py-2',
  ].join(' ');

  const helpTextClasses = [
    'text-gray-600 text-sm',
    'mt-2',
    'bg-blue-50 border border-blue-200 rounded-lg px-3 py-2',
  ].join(' ');

  return (
    <div className={formGroupClasses}>
      {label && (
        <div className={labelContainerClasses}>
          <Label
            n2
            fs3
            target={target}
            fw3={fw3}
            data-testid={`${labelId}-label`}
            {...domProps}
          >
            {label}
            {required && (
              <span className={requiredClasses}>*</span>
            )}
          </Label>
          {optional && (
            <span className={optionalClasses}>(Opcional)</span>
          )}
        </div>
      )}
      {children}
      {errorMessage && (
        <div className={errorClasses}>
          {errorMessage}
        </div>
      )}
      {helpText && (
        <div className={helpTextClasses}>
          {helpText}
        </div>
      )}
    </div>
  );
};