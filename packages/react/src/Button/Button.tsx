import React, { type PropsWithChildren } from 'react';

import { css } from '../../styled-system/css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={css({
        bg: 'red.300',
        fontFamily: 'Inter',
        px: '4',
        py: '3',
        borderRadius: 'md',
        _hover: { bg: 'red.400' },
      })}
    >
      {children}
    </button>
  );
}
