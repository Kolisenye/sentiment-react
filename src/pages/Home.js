import React, {useState} from 'react'
import Sentiment from 'sentiment';

function Home() {
  const sentiment = new Sentiment ();
  const [sentimentScore, setSentimentScore] = useState(null);
  const [generalSentiment, setGeneralSentiment] = useState(null);

  function findSentiment(event) {
    const result = sentiment.analyze(event.target.value)
    console.log(result)
    setSentimentScore(result.score)
    if (result.score < 0) {
      setGeneralSentiment('Negative')
    } else if (result.score > 0) {
      setGeneralSentiment('Positive')
    } else {
      setGeneralSentiment('Neutral')
    }
  }
  return (
     <div className="App">
      <title>Sentiment analyzer</title>
      <h2>Text sentiment analysis in React</h2>
      <p>Enter text for real time sentiment analysis:</p>
      <textarea onChange={findSentiment}/>
      <p>Sentiment Score: {sentimentScore}</p>
      <p>General Sentiment: {generalSentiment}</p>
    </div>
  )
}

export default Home
