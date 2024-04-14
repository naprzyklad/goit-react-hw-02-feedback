import { useState } from "react";
import { Statistics } from "./Statistics";

export const Feedback = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const GoodClick = () => {
    setGoodCount(goodCount + 1);
  };

  const NeutralClick = () => {
    setNeutralCount(neutralCount + 1);
  };

  const BadClick = () => {
    setBadCount(badCount + 1);
  };

  return (
    <div>
      <h2>Dajcie łapkę w górę i suba UwU</h2>
      <div>
        <button onClick={GoodClick}>Good</button>
        <button onClick={NeutralClick}>Neutral</button>
        <button onClick={BadClick}>Bad</button>
      </div>
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </div>
  );
};

// Feedback.PropTypes = {
//   goodCount: ProtoTypes.number.isRequired,
// };
