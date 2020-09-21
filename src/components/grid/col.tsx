import React, { PropsWithChildren } from 'react';
import { isNotNullOrUndefined } from '../../util/util';
import { ExtractElements } from '../../util/util.types';

const sizeVariants = ['sm', 'md', 'lg'] as const;

type Sizes =  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type SizeVariants = ExtractElements<typeof sizeVariants>; 
type SizeVariantMap = { [key in SizeVariants]?: Sizes };

type ExtraProps = {
  className?: string;
}

type Props = PropsWithChildren<ExtraProps & SizeVariantMap>;

/**
 * Gets the associated bootstrap classnames based on props
 * @param props Grid related props
 * @param extraClassName Any extra classnames as a string
 */
function getColClassnames(props: Props, extraClassName?: string) {
  const gridSizes = sizeVariants.filter(size => props[size] !== undefined);
  const bootstrapClasses = gridSizes.map(size => `col-${size}-${props[size]}`);

  return [...bootstrapClasses, extraClassName].filter(isNotNullOrUndefined).join(' ');
}

const Col = ({ children, className, ...gridProps }: Props) => (
  <div className={getColClassnames(gridProps, className)}>
    { children }
  </div>
);

export default Col;
