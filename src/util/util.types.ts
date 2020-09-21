export type ExtractElements<A extends readonly any[]> = A extends readonly (infer I)[]
  ? I
  : never
