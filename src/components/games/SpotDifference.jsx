import { useState } from "react";
import "../../styling/games/SpotDifference.css";

function SpotDifference({ game }) {
  const [foundAnswers, setFoundAnswers] = useState([]);

  const handleAnswerClick = (index) => {
    if (foundAnswers.includes(index)) {
      return;
    }

    setFoundAnswers((prev) => [...prev, index]);
  };

  const renderImage = (image, imageIndex) => {
    return (
      <div className="spot-image-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/games/${game.gameID}/${image}`}
          alt={`Spot the difference ${imageIndex + 1}`}
          className="spot-image"
        />

        {game.answers.map((answer, index) => {
          const isFound = foundAnswers.includes(index);

          return (
            <button
              key={index}
              type="button"
              className={`spot-answer ${isFound ? "spot-answer-found" : ""
                }`}
              style={{
                left: `${answer.x}%`,
                top: `${answer.y}%`,
                width: `${answer.width}%`,
                height: `${answer.height}%`,
              }}
              onClick={() => handleAnswerClick(index)}
              aria-label={`Difference ${index + 1}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="spot-difference-game">
      <div className="eyebrow">BY {game.gameCreator}</div>
      <h2 className="section-title serif">{game.gameTitle}</h2>
      <div
        className={`spot-images`}
      >
        {renderImage(game.image1, 0)}
        {renderImage(game.image2, 1)}
      </div>

      <div className="spot-progress">
        Found: {foundAnswers.length} / {game.answers.length}
      </div>

    </div>
  );
}

export default SpotDifference;