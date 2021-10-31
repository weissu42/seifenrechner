export interface Zutat {
  name: string;
  verseifungszahl: number;
  anteil: number;
}

export interface Rezept {
  laugenunterschuss: number;
  gesamtfettmasse: number;
   kaohAnteil: number;
   naohAnteil: number;
}

export interface Metadata {
  name: string;
}
