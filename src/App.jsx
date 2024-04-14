import { Feedback } from "./Components/Buttons";
import { SectionHeadline } from "./Components/Section";

function App() {
  const countTotalFeedback = () => {
    const totalVotes = goodCount + neutralCount + badCount;
  };

  return (
    <>
      <SectionHeadline title="Jakoś działa nie wiem jak">
        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
        <Feedback></Feedback>
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
      </SectionHeadline>
      {/* <Notification message="There is no feedback"></Notification> */}
    </>
  );
}

export default App;
