import React, { useState } from "react";
import Sentiment from "sentiment";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import BackupIcon from "@material-ui/icons/Backup";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
  const showResults = () => {
    if (!sentimentScore && !generalSentiment) {
      MySwal.fire({
        icon: "error",
        text: "Please input text",
        didClose: () => {
          setGeneralSentiment(null);
          setSentimentScore(null);
          document.getElementById("textBox").value = "";
        },
      });
      return;
    }
    MySwal.fire({
      title: (
        <div className="inline-flex items-center space-x-2">
          <p>Results</p>
          <AssignmentIcon fontSize="large" />
        </div>
      ),
      html: (
        <div>
          <p className="flex flex-col">
            This text has a sentiment score of
            <span className="font-bold text-2xl">{sentimentScore}</span>
          </p>
          <p className="flex flex-col">
            This means that the overall sentiment or tone of this text is
            <span className="font-bold text-2xl">{generalSentiment}</span>
          </p>
        </div>
      ),
      didClose: () => {
        setGeneralSentiment(null);
        setSentimentScore(null);
        document.getElementById("textBox").value = "";
      },
    });
  };
  return (
    <div>
      <Layout>
        <Grid item xs={12}>
          <div className="mx-10 my-10 space-y-4">
            <p className="items-center">
              Enter text for real time sentiment analysis:
            </p>
            <div>
              <TextField
                onChange={findSentiment}
                id="textBox"
                label="Enter Text"
                multiline
                rows={15}
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={showResults}
                variant="contained"
                color="primary"
                startIcon={<BackupIcon />}
              >
                Analyze Text!
              </Button>
            </div>
          </div>
        </Grid>
      </Layout>
    </div>
  );
}

export default Home;
