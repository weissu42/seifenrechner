export interface Zutat {
  name: string;
  verseifungszahl: number;
  anteil: number;
}

export interface Rezept {
  laugenunterschuss: number;
  gesamtfettmasse: number;
}

export interface Metadata {
  name: string;
}
