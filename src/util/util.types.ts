export type SectionID = 'intro' | 'founders' | 'skills' | 'about' | 'clients' | 'contact';

export type ExtractElements<A extends readonly any[]> = A extends readonly (infer I)[] ? I : never;
