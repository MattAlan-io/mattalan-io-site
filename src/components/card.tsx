import { Props, PropsWithChildren } from "react";
import React from 'react';

const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => <div className={`inline-block pa-10 ${className}`}>{children}</div>;

export default Card;