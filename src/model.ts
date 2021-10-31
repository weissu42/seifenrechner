export interface Zutat {
  name: string;
  zusatz: boolean;
  verseifungszahl: number;
  jodzahl: number;
  anteil: number;
}

export interface Rezept {
  laugenunterschuss: number;
  gesamtfettmasse: number;
  naohAnteil: number;
}

export interface Metadata {
  name: string;
}
