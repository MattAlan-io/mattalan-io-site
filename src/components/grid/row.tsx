import React, { PropsWithChildren } from 'react';

type ExtraProps = {
  className?: string;
}

type Props = PropsWithChildren<ExtraProps>;

const Row = ({ children }: Props) => (
  <div className="row">{children}</div>
);

export default Row;