import React, { type PropsWithChildren } from 'react'

import { storybookButton } from './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children }: PropsWithChildren<ButtonProps>) {
  return <button className={storybookButton}>{children}</button>
}
