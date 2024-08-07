import { useQuiz } from '../contexts/QuizContext';

export default function Progress() {
  const { index, numQuestions, maxPossiblePoints, points, answer } = useQuiz();
  console.log(numQuestions);
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
