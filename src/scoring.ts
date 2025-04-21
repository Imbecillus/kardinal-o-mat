import { CARDINAL_MAP } from "./data/cardinals";
import type { Answer, CardinalId } from "./types";

/**
 * Returns a number between 0 and 1 reflecting the difference between the
 * user's answered questions and the cardinal's answered questions.
 * 
 * If one or both have not answered a question, it is skipped.
 */
export const calculateSimilarityScore = (userAnswers: Answer[], cardinalId: CardinalId): number => {

  const cardinalAnswers = CARDINAL_MAP.get(cardinalId)?.answers;

  if (!userAnswers?.length || !cardinalAnswers?.length) {
    console.error(`No answers for ${cardinalId}`);
    return 0;
  }

  let distance = 0;
  let evaluatedQuestions = 0;

  for (let i = 0; i < userAnswers.length; i++) {

    const userAnswer = userAnswers[i];
    const cardinalAnswer = cardinalAnswers[i];

    if (userAnswer === undefined || cardinalAnswer === undefined) {
      continue;
    }

    evaluatedQuestions += 1;

    distance += Math.abs(userAnswer - cardinalAnswer);

  }

  if (!evaluatedQuestions) {
    return 0;
  }

  const maxDistance = evaluatedQuestions * 2;

  return 1 - distance / maxDistance;

}
