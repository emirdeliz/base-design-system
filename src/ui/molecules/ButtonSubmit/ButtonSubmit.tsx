'use client';

import { Button } from "@ui";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ButtonSubmitProps {
  children?: ReactNode;
}

export const ButtonSubmit = ({ children }: ButtonSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" clickable={!pending}>{children}</Button>
  );
};