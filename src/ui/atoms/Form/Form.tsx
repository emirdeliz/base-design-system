import { FormEventHandler, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  action?: (formData: FormData) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form = ({ children, action, onSubmit, ...props }: FormProps) => {
  const formClasses = [
    'w-full',
    'h-full',
  ].join(' ');

  return (
    <form className={formClasses} action={action} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};
