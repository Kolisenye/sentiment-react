import React, { useState } from "react";
import Sentiment from "sentiment";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function Home() {
  const sentiment = new Sentiment();
  const [sentimentScore, setSentimentScore] = useState(null);
  const [generalSentiment, setGeneralSentiment] = useState(null);

  function findSentiment(event) {
    const result = sentiment.analyze(event.target.value);
    console.log(result);
    setSentimentScore(result.score);
    if (result.score < 0) {
      setGeneralSentiment("negative");
    } else if (result.score > 0) {
      setGeneralSentiment("positive");
    } else {
      setGeneralSentiment("neutral");
    }
  }
  return (
    <div>
      <Layout>
        <Grid item xs={12}>
          <div className="static items-center mx-10 my-10">
            <p className="items-center">
              Enter text for real time sentiment analysis:
            </p>
            <textarea rows={20} cols={150} onChange={findSentiment} />
            <br />
            <button className="px-4 py-2 font-bold bg-gray-400 rounded hover:bg-blue-400">
              Analyze Text!
            </button>
            <div className="">
              <p>
                This text has a sentiment score of {sentimentScore}. This means
                that the overall sentiment or tone of this text is{" "}
                {generalSentiment}.
              </p>
            </div>
          </div>
        </Grid>
      </Layout>
    </div>
  );
}

export default Home;
