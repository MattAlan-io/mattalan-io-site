import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<JSX.IntrinsicElements['div']>;

const ContentWrapper = ({ children, className, ...divProps }: Props) => {
  return <div {...divProps} className={`p-5 md:p-10 h-full justify-center self-center ${className}`}>{children}</div>;
};

export default ContentWrapper;
