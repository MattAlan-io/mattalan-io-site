export type SectionID = 'intro' | 'contact' | 'founders' | 'skills';

export type ExtractElements<A extends readonly any[]> = A extends readonly (infer I)[] ? I : never;
