import { Input, InputProps, FormGroup } from '@ui';

export interface InputFormProps extends Omit<InputProps, 'onChange'> {
  children: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

export const InputForm = ({
  value,
  children,
  onChange,
  ...props
}: InputFormProps) => {
  const id = children ? children.replace(/\s/g, '_') : String(props.id || props.name);
  return (
    <FormGroup label={children} target={id} {...props}>
      <Input
        {...props}
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </FormGroup>
  );
};
