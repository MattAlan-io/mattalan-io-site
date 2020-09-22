import { InterpolationWithTheme } from "@emotion/core";

declare module 'react' {
  interface Attributes {
    css?: InterpolationWithTheme<any>;
  }
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}