import React, { type PropsWithChildren } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return <button {...props}>{children}</button>;
}
