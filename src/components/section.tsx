import React, { PropsWithChildren } from 'react';
import { SectionID } from '../util/util.types';

type Props = PropsWithChildren<{
  className?: string;
  id: SectionID;
}>;

const Section = ({ children, className = '', id }: Props) => (
  <section id={id} className={`py-10 ${className}`}>
    {children}
  </section>
);

export default Section;
