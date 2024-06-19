import { useQuiz } from '../contexts/QuizContext';

export default function Option({ question }) {
  const { answer, dispatch } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((el, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''
          }`}
          key={el}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
