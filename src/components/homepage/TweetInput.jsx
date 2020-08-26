import React, { useState, useContext } from "react";
import firebaseContext from "../../firebase/context";
import firebase from "../../firebase/firebase";

const TweetInput = () => {
  const { user } = useContext(firebaseContext);
  const [value, setValue] = useState("");

  const handleTweet = (e) => {
    e.preventDefault();
    const newTweet = {
      tweet: value,
      tweetBy: {
        id: user.uid,
        username: user.displayName,
      },
      loveCount: 0,
      loves: [],
      comments: [],
      created_at: Date.now(),
    };
    firebase.db.collection("tweets").add(newTweet);
    setValue("");
  };

  return (
    <form className="w-100" onSubmit={handleTweet}>
      <span className="h1 text-white mx-3">
        <i className="fas fa-user-circle"></i>
      </span>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="tweet"
        className="tweet-input"
        type="text"
        placeholder="What's happening?"
      />
      <div className="text-right mx-5 pt-3">
        <button
          className="btn btn-primary rounded-pill"
          type="submit"
          disabled={!value}
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetInput;
