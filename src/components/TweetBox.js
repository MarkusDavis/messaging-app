import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import db from "../util/firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: tweetMessage,
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(event) => setTweetImage(event.target.value)}
          value={tweetImage}
          className="tweetBox__ImageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
