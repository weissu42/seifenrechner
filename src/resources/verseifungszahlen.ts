/* eslint-disable @typescript-eslint/naming-convention */

export const umrechnungsfaktor = 1.40272;

interface ZutatInfo {
  verseifungszahl: number;
  jodzahl: number;
  zusatz?: boolean;
}

export const verseifungszahlen: { [name: string]: ZutatInfo } = {
  Aprikosenkernöl: {
    verseifungszahl: 135,
    jodzahl: 100,
  },
  Arganöl: {
    verseifungszahl: 136,
    jodzahl: 100,
  },
  Avocadoöl: {
    verseifungszahl: 133.5,
    jodzahl: 87.5,
  },
  Babassuöl: {
    verseifungszahl: 175,
    jodzahl: 16,
  },
  Bienenwachs: {
    verseifungszahl: 69,
    jodzahl: 11,
  },
  Brokkolisamenöl: {
    verseifungszahl: 124.8,
    jodzahl: 105,
  },
  Cameliaöl: {
    verseifungszahl: 136,
    jodzahl: 82,
  },
  Cameliasamenöl: {
    verseifungszahl: 136,
    jodzahl: 82,
  },
  Carnaubawachs: {
    verseifungszahl: 69,
    jodzahl: 8,
  },
  Cashewöl: {
    verseifungszahl: 137.9,
    jodzahl: 83,
  },
  Cupuacubutter: {
    verseifungszahl: 138,
    jodzahl: 45,
  },
  Distelöl: {
    verseifungszahl: 135.5,
    jodzahl: 102.5,
  },
  'Distelöl HO': {
    verseifungszahl: 135.5,
    jodzahl: 93,
  },
  Erdnussöl: {
    verseifungszahl: 135.5,
    jodzahl: 156,
  },
  Hanföl: {
    verseifungszahl: 134.5,
    jodzahl: 152.5,
  },
  Himbeerkernöl: {
    verseifungszahl: 134,
    jodzahl: 170,
  },
  Himbeersamenöl: {
    verseifungszahl: 134,
    jodzahl: 170,
  },
  Haselnussöl: {
    verseifungszahl: 137,
    jodzahl: 96.5,
  },
  Johannisbeerkernöl: {
    verseifungszahl: 134,
    jodzahl: 175,
  },
  Johannisbeersamenöl: {
    verseifungszahl: 134,
    jodzahl: 175,
  },
  Jojobaöl: {
    verseifungszahl: 66,
    jodzahl: 82.5,
  },
  Kaffeebohnenöl: {
    verseifungszahl: 139,
    jodzahl: 87,
  },
  Kakaobutter: {
    verseifungszahl: 137,
    jodzahl: 37.5,
  },
  Kamelienöl: {
    verseifungszahl: 136,
    jodzahl: 86,
  },
  Kameliensamenöl: {
    verseifungszahl: 136,
    jodzahl: 86,
  },
  Kirschkernöl: {
    verseifungszahl: 139,
    jodzahl: 126,
  },
  Kiwisamenöl: {
    verseifungszahl: 139.7,
    jodzahl: 123,
  },
  Kokosöl: {
    verseifungszahl: 183,
    jodzahl: 8.5,
  },
  'Kokosöl nativ': {
    verseifungszahl: 183,
    jodzahl: 8.5,
  },
  Kürbiskernöl: {
    verseifungszahl: 135,
    jodzahl: 132,
  },
  Lanolin: {
    verseifungszahl: 75,
    jodzahl: 32,
  },
  Leinöl: {
    verseifungszahl: 134,
    jodzahl: 175,
  },
  Lorbeeröl: {
    verseifungszahl: 140.5,
    jodzahl: 60,
  },
  Macadamiaöl: {
    verseifungszahl: 139,
    jodzahl: 76,
  },
  Macadamianussöl: {
    verseifungszahl: 139,
    jodzahl: 76,
  },
  Mafurabutter: {
    verseifungszahl: 139.7,
    jodzahl: 70,
  },
  Maiskeimöl: {
    verseifungszahl: 136,
    jodzahl: 116.5,
  },
  Mandelöl: {
    verseifungszahl: 136.5,
    jodzahl: 99.5,
  },
  Mangobutter: {
    verseifungszahl: 133.9,
    jodzahl: 60,
  },
  Maracujaöl: {
    verseifungszahl: 130,
    jodzahl: 124,
  },
  Mohnöl: {
    verseifungszahl: 138.3,
    jodzahl: 134,
  },
  Nachtkerzenöl: {
    verseifungszahl: 134.5,
    jodzahl: 153.5,
  },
  Neemöl: {
    verseifungszahl: 139,
    jodzahl: 66,
  },
  Olivenöl: {
    verseifungszahl: 134.5,
    jodzahl: 83.5,
  },
  Palmkernöl: {
    verseifungszahl: 168,
    jodzahl: 19,
  },
  Palmöl: {
    verseifungszahl: 140.5,
    jodzahl: 54,
  },
  Passionsfruchtöl: {
    verseifungszahl: 129,
    jodzahl: 124,
  },
  Passionsfruchtkernöl: {
    verseifungszahl: 129,
    jodzahl: 124,
  },
  Pfirsichkernöl: {
    verseifungszahl: 134.5,
    jodzahl: 113,
  },
  Pistazienkernöl: {
    verseifungszahl: 132.6,
    jodzahl: 92,
  },
  Pistazienöl: {
    verseifungszahl: 132.6,
    jodzahl: 92,
  },
  Rapsbutter: {
    verseifungszahl: 155,
    jodzahl: 95,
  },
  Rapsöl: {
    verseifungszahl: 135.4,
    jodzahl: 107.5,
  },
  Reiskeimöl: {
    verseifungszahl: 134.5,
    jodzahl: 104,
  },
  Rizinusöl: {
    verseifungszahl: 128.6,
    jodzahl: 86,
  },
  Sanddornkernöl: {
    verseifungszahl: 116,
    jodzahl: 60,
  },
  Schwarzkümmelöl: {
    verseifungszahl: 135,
    jodzahl: 124,
  },
  Sesamöl: {
    verseifungszahl: 137.6,
    jodzahl: 110,
  },
  Sheabutter: {
    verseifungszahl: 128.2,
    jodzahl: 63,
  },
  Sojaöl: {
    verseifungszahl: 135.5,
    jodzahl: 128,
  },
  Sonnenblumenöl: {
    verseifungszahl: 135,
    jodzahl: 130,
  },
  'Sonnenblumenöl HO': {
    verseifungszahl: 135,
    jodzahl: 85,
  },
  Stearin: {
    verseifungszahl: 141,
    jodzahl: 2.5,
  },
  Stearinsäure: {
    verseifungszahl: 146,
    jodzahl: 2.5,
  },
  Teesamenöl: {
    verseifungszahl: 136,
    jodzahl: 86,
  },
  Traubenkernöl: {
    verseifungszahl: 128.5,
    jodzahl: 133.5,
  },
  Ucuubabutter: {
    verseifungszahl: 122,
    jodzahl: 10,
  },
  Walnussöl: {
    verseifungszahl: 133.5,
    jodzahl: 145,
  },
  Weizenkeimöl: {
    verseifungszahl: 131,
    jodzahl: 130,
  },
  Wildrosenöl: {
    verseifungszahl: 135.9,
    jodzahl: 164,
  },
  Alverdeöl: {
    verseifungszahl: 130.0,
    jodzahl: 128,
  },
  Ascorbinsäure: {
    verseifungszahl: 227,
    jodzahl: 0,
    zusatz: true,
  },
  Essigsäure: {
    verseifungszahl: 666,
    jodzahl: 0,
    zusatz: true,
  },
  Zitronensäure: {
    verseifungszahl: 571,
    jodzahl: 0,
    zusatz: true,
  },
};
