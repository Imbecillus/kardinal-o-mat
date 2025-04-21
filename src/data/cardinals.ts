import type { Answer, CardinalId } from '../types';

type AnswerArray = [Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer];

interface Cardinal {
  id: CardinalId;
  name: string;
  position: string;
  answers: AnswerArray;
}

const CARDINALS: Array<Cardinal> = [
  {
    id: 'besengu',
    name: 'Fridolin Ambongo Besungu',
    position: 'Erzbischof von Kinshasa, Demokratische Republik Kongo',
    answers: [0, -1, -1, 0, undefined, 1, 1, undefined, undefined, 0]
  },
  {
    id: 'arborelius',
    name: 'Anders Arborelius',
    position: 'Bischof von Stockholm, Schweden',
    answers: [-1, undefined, -1, 1, 0, 1, 1, -1, 1, 1]
  },
  {
    id: 'aveline',
    name: 'Jean-Marc Aveline',
    position: 'Erzbischof von Marseille, Frankreich',
    answers: [0, -1, 0, -1, undefined, 1, 1, undefined, undefined, undefined]
  },
  {
    id: 'bagnasco',
    name: 'Angelo Bagnasco',
    position: 'Emeritierter Erzbischof von Genua, Italien',
    answers: [-1, undefined, -1, undefined, undefined, 0, undefined, -1, -1, undefined]
  },
  {
    id: 'bo',
    name: 'Charles Maung Bo',
    position: 'Erzbischof von Yangon, Myanmar',
    answers: [-1, 0, -1, undefined, -1, 1, 1, undefined, 1, undefined]
  },
  {
    id: 'brislin',
    name: 'Stephen Brislin',
    position: 'Erzbischof von Johannesburg, Südafrika',
    answers: [1, 0, 1, undefined, undefined, 1, 1, 0, 1, undefined]
  },
  {
    id: 'burke',
    name: 'Raymond Leo Burke',
    position: 'Emeritierter Präfekt der Apostolischen Signatur',
    answers: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
  },
  {
    id: 'eijk',
    name: 'Willem Jacobus Eijk',
    position: 'Erzbischof von Utrecht, Niederlande',
    answers: [-1, -1, -1, undefined, undefined, 0, undefined, -1, -1, 1]
  },
  {
    id: 'erdo',
    name: 'Péter Erdő',
    position: 'Erzbischof von Esztergom-Budapest, Ungarn',
    answers: [undefined, -1, undefined, 0, undefined, undefined, undefined, -1, -1, undefined]
  },
  {
    id: 'filoni',
    name: 'Fernando Filoni',
    position: 'Großmeister des Ritterordens vom Heiligen Grab zu Jerusalem',
    answers: [undefined, undefined, undefined, undefined, 0, 0, undefined, undefined, undefined, undefined]
  },
  {
    id: 'koch',
    name: 'Kurt Koch',
    position: 'Präfekt des Dikasteriums zur Förderung der Einheit der Christen',
    answers: [0, 0, 0, 0, undefined, 0, undefined, undefined, 0, 1]
  },
  {
    id: 'muller',
    name: 'Gerhard Ludwig Müller',
    position: 'Emeritierter Präfekt des Dikasterium für die Glaubenslehre',
    answers: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
  },
  {
    id: 'ouellet',
    name: 'Marc Ouellet',
    position: 'Emeritierter Präfekt des Dikasteriums für Bischöfe',
    answers: [-1, undefined, -1, 1, undefined, 1, undefined, -1, 1, 1]
  },
  {
    id: 'parolin',
    name: 'Pietro Parolin',
    position: 'Staatssekretär Seiner Heiligkeit',
    answers: [-1, 0, 0, 1, 1, 1, 1, 0, 1, 0]
  },
  {
    id: 'piacenza',
    name: 'Mauro Piacenza',
    position: 'Emeritierter Großpönitentiar der Apostolischen Pönitentiarie',
    answers: [-1, undefined, -1, -1, undefined, undefined, undefined, undefined, undefined, undefined]
  },
  {
    id: 'pizzaballa',
    name: 'Pierbattista Pizzaballa',
    position: 'Lateinischer Patriarch von Jerusalem',
    answers: [-1, undefined, undefined, -1, undefined, 0, 0, undefined, undefined, 1]
  },
  {
    id: 'don',
    name: 'Albert Malcolm Ranjith Patabendige Don',
    position: 'Erzbischof von Colombo, Sri Lanka',
    answers: [-1, -1, -1, -1, undefined, 0, 1, -1, -1, 1]
  },
  {
    id: 'sarah',
    name: 'Robert Sarah',
    position: 'Emeritierter Präfekt der Kongregation für den Gottesdienst und die Sakramentenordnung',
    answers: [-1, -1, -1, -1, undefined, -1, -1, -1, -1, 1]
  },
  {
    id: 'sturla',
    name: 'Daniel Fernando Sturla',
    position: 'Erzbischof von Montevideo, Uruguay',
    answers: [undefined, -1, undefined, undefined, undefined, -1, undefined, -1, -1, 1]
  },
  {
    id: 'tagle',
    name: 'Luis Antonio Gokim Tagle',
    position: 'Pro-Präfekt des Dikasteriums für Evangelisierung',
    answers: [-1, 0, 0, 0, 1, 1, 1, 1, 0, undefined]
  },
  {
    id: 'mendonca',
    name: 'José Tolentino de Mendonça',
    position: 'Präfekt des Dikasteriums für Kultur und Bildung',
    answers: [0, undefined, 0, undefined, undefined, 1, undefined, undefined, 1, undefined]
  },
  {
    id: 'zuppi',
    name: 'Matteo Zuppi',
    position: 'Erzbischof von Bologna, Italien',
    answers: [-1, 1, 1, 0, 1, 1, 1, 1, 1, undefined]
  }
];

export const CARDINAL_MAP: Map<CardinalId, Cardinal> = new Map();

for (const cardinal of CARDINALS) {
  CARDINAL_MAP.set(cardinal.id, cardinal);
}
