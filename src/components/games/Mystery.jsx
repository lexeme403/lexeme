import { useState } from "react";

function Mystery({ game }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleAnswer(answer) {
    setSelectedAnswer(answer);
  }

  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === game.correctAnswer;

  return (
    <div>
        <div className="eyebrow">BY {game.gameCreator}</div>
        <h2 className="section-title serif">{game.gameTitle}</h2>

        <div className="mystery-explanation">
          {game.explanation.map((text, index) => (
            <p key={index}>
              {text}
            </p>
          ))}
        </div>

        <div className="mystery-answers">

          <h3>{game.question}</h3>
          <div className="button-row">
            {game.answers.map((answer) => (
              <button className="btn btn-outline"
                key={answer}
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>

        {isAnswered && (
          <p className="mystery-result">

            {isCorrect
              ? "Correct! You solved the mystery."
              : `Wrong! The correct answer is ${game.correctAnswer}.`
            }

          </p>
        )}
      </div>
  );
}

export default Mystery;