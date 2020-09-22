import { Props, PropsWithChildren } from "react";
import React from 'react';

const Card = ({ children }: PropsWithChildren<{}>) => <div className="inline-block pa-10">{children}</div>;

export default Card;