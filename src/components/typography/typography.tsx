import React from 'react'
import { PropsWithChildren } from 'react'
import styles from './typography.module.css'
import type { ExtractElements } from '../../util/util.types';

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const

type Variants = ExtractElements<typeof variants>
type VariantMap = { [key in Variants]?: boolean }

type ExtraProps =  {
  inline?: boolean;
  alignRight?: boolean;
};

type Props = PropsWithChildren<ExtraProps & VariantMap>;

const getElement = (variantMap: VariantMap) => {
  const candidates = variants.filter(variant => variantMap[variant]);
   
  if (candidates.length === 0) {
    return 'p';
  }

  if (candidates.length > 1) {
    throw new Error('Cannot apply more than on typography variant!');
  } else 

  return candidates[0];
}

const Typography = ({ children, inline, alignRight,  ...variants }: Props) => {
  const Element = getElement(variants)

  return (
    <Element
      style={{
        ...styles,
        ...(inline && { display: 'inline-block' }),
        ...(alignRight && { textAlign: 'right' }),
      }}
    >
      {children}
    </Element>
  )
}

export default Typography
