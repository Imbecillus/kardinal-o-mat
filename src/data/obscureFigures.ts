import { ObscureFigureId } from "../types";
import type { Cardinal } from "./cardinals";

interface ObscureFigure extends Omit<Cardinal, 'id'> {
  id: ObscureFigureId;
}

const OBSCURE_FIGURES: Array<ObscureFigure> = [
  {
    id: ObscureFigureId.BEYONCE,
    answers: [1, 1, 1, undefined, undefined, undefined, 1, 1, 1, undefined],
    name: 'Beyoncé',
    position: 'Queen of Pop'
  },
  {
    id: ObscureFigureId.BARBOSSA,
    answers: [0, 1, 1, undefined, 0, 0, 0, 1, 1, undefined],
    name: 'Hector Barbossa',
    position: 'Kapitän der Black Pearl und Lord des Rats der Bruderschaft'
  },
  {
    id: ObscureFigureId.BUDDHA,
    answers: [1, 1, 1, undefined, -1, 1, 1, 0, 1, -1],
    name: 'Siddhartha Gautama',
    position: 'Der Buddha'
  },
  {
    id: ObscureFigureId.CHARLES,
    answers: [1, 0, 0, undefined, undefined, 1, 1, 1, 1, undefined],
    name: 'Charles III.',
    position: 'König des Vereinigten Königreichs und Oberster Gouverneur der Kirche von England'
  },
  {
    id: ObscureFigureId.DALAI_LAMA,
    answers: [1, 0, -1, undefined, undefined, 0, 1, 1, undefined, -1],
    name: 'Tenzin Gyatso',
    position: '14. Dalai Lama'
  },
  {
    id: ObscureFigureId.NORRIS,
    answers: [-1, 0, 0, undefined, undefined, -1, -1, 0, -1, undefined],
    name: 'Skinny Norris',
    position: 'Unser Erzfeind'
  },
  {
    id: ObscureFigureId.PALPATINE,
    answers: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1],
    name: 'Sheev Palpatine',
    position: 'Imperator des Galaktischen Imperiums'
  },
  {
    id: ObscureFigureId.SKELETHORB,
    answers: [1, 1, 1, -1, -1, 1, 1, 1, 1, -1],
    name: 'Skelethorb',
    position: 'Der Größte'
  },
  {
    id: ObscureFigureId.SNOW,
    answers: [-1, -1, -1, 1, 1, -1, -1, -1, -1, 1],
    name: 'Coriolanus Snow',
    position: 'Präsident von Panem'
  },
  {
    id: ObscureFigureId.SPARROW,
    answers: [-1, -1, -1, 1, undefined, -1, 1, -1, -1, 1],
    name: 'Der Hohe Spatz',
    position: 'Hoher Septon'
  },
  {
    id: ObscureFigureId.STROMBERG,
    answers: [-1, 0, 1, 1, 1, -1, -1, -1, -1, 1],
    name: 'Bernd Stromberg',
    position: 'Leiter der Schadensregulierung M-Z'
  },
  {
    id: ObscureFigureId.YODA,
    answers: [1, undefined, -1, 1, -1, 0, 1, undefined, undefined, undefined],
    name: 'Yoda',
    position: 'Jedi-Meister und Mitglied des Hohen Rats der Jedi'
  }
];

export const OBSCURE_FIGURE_MAP: Map<ObscureFigureId, ObscureFigure> = new Map();

for (const figure of OBSCURE_FIGURES) {
  OBSCURE_FIGURE_MAP.set(figure.id, figure);
}
