export const ADJECTIVES = [
  'unwählbarere', 'papabilere', 'fantastischere', 'päpstlichere', 'schlechter recherchierte', 'ulkigere',
  'einzigartigere', 'leckerere', 'sterilere', 'beliebtere', 'genialere', 'transparentere', 'bekanntere',
  'unschuldigere', 'verpöntere', 'vermaledeite', 'bibeltreue', 'kunstvollere', 'originellere', 'kultigere',
  'urige', 'skelethorbigere', 'kardinaligere', 'ältere', 'wirklich wahre', 'nicht-pseudoepigraphische',
  'heiligere', 'lustigere', 'originalere', 'oberaphphentittengeilere'
];

export const randomAdjective = (): string => {

  const rand = Math.floor(
    Math.random() * ADJECTIVES.length
  );

  return ADJECTIVES[rand] ?? '';

}
