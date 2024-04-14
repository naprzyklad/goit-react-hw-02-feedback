export const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const totalVotes = goodCount + neutralCount + badCount;
  const positivePercentage =
    totalVotes > 0 ? (goodCount / totalVotes) * 100 : 0;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      {totalVotes > 0 ? (
        <>
          <ul>
            <li className="list-item">Good: {goodCount}</li>
            <li className="list-item">Neutral: {neutralCount}</li>
            <li className="list-item">Bad: {badCount}</li>
            <li className="list-item">Total: {totalVotes}</li>
          </ul>
          <p>Positive Feedback Percentage: {positivePercentage.toFixed(0)}%</p>
        </>
      ) : (
        <p>No feedback yet received</p>
      )}
    </div>
  );
};
