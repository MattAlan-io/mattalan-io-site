import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<JSX.IntrinsicElements['button']>;

const Button = ({ children, className, ...buttonProps }: Props) => {
  const primaryStyle = 'bg-maio-blue rounded-lg px-5 py-2 text-xl font-bold';

  return (
    <button {...buttonProps} className={`${primaryStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
