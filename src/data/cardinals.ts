import type { Answer, CardinalId } from '../types';

type AnswerArray = [Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer];

export const CARDINAL_ANSWERS: Map<CardinalId, AnswerArray> = new Map([
  [
    'besengu',
    [0, -1, -1, 0, undefined, 1, 1, undefined, undefined, 0]
  ],
  [
    'arborelius',
    [-1, undefined, -1, 1, 0, 1, 1, -1, 1, 1]
  ],
  [
    'aveline',
    [0, -1, 0, -1, undefined, 1, 1, undefined, undefined, undefined]
  ],
  [
    'bagnasco',
    [-1, undefined, -1, undefined, undefined, 0, undefined, -1, -1, undefined]
  ],
  [
    'bo',
    [-1, 0, -1, undefined, -1, 1, 1, undefined, 1, undefined]
  ],
  [
    'brislin',
    [1, 0, 1, undefined, undefined, 1, 1, 0, 1, undefined]
  ],
  [
    'burke',
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
  ],
  [
    'eijk',
    [-1, -1, -1, undefined, undefined, 0, undefined, -1, -1, 1]
  ],
  [
    'erdo',
    [undefined, -1, undefined, 0, undefined, undefined, undefined, -1, -1, undefined]
  ],
  [
    'filoni',
    [undefined, undefined, undefined, undefined, 0, 0, undefined, undefined, undefined, undefined]
  ],
  [
    'koch',
    [0, 0, 0, 0, undefined, 0, undefined, undefined, 0, 1]
  ],
  [
    'muller',
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
  ],
  [
    'ouellet',
    [-1, undefined, -1, 1, undefined, 1, undefined, -1, 1, 1]
  ],
  [
    'parolin',
    [-1, 0, 0, 1, 1, 1, 1, 0, 1, 0]
  ],
  [
    'piacenza',
    [-1, undefined, -1, -1, undefined, undefined, undefined, undefined, undefined, undefined]
  ],
  [
    'pizzabella',
    [-1, undefined, undefined, -1, undefined, 0, 0, undefined, undefined, 1]
  ],
  [
    'don',
    [-1, -1, -1, -1, undefined, 0, 1, -1, -1, 1]
  ],
  [
    'sarah',
    [-1, -1, -1, -1, undefined, -1, -1, -1, -1, 1]
  ],
  [
    'sturla',
    [undefined, -1, undefined, undefined, undefined, -1, undefined, -1, -1, 1]
  ],
  [
    'tagle',
    [-1, 0, 0, 0, 1, 1, 1, 1, 0, undefined]
  ],
  [
    'mendonca',
    [0, undefined, 0, undefined, undefined, 1, undefined, undefined, 1, undefined]
  ],
  [
    'zuppi',
    [-1, 1, 1, 0, 1, 1, 1, 1, 1, undefined]
  ]
]);
