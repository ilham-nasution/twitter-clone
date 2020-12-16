import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import firebase from "../../firebase/firebase";

const TweetInput = ({ setTweets }) => {
  const user = useContext(UserContext);
  const { register, handleSubmit, watch, reset } = useForm();
  const watchTweet = watch("tweet");

  const handleTweet = (values) => {
    const newTweet = {
      tweet: values.tweet,
      tweetBy: {
        id: user.uid,
        username: user.displayName,
      },
      loveCount: 0,
      loves: [],
      comments: [],
      created_at: Date.now(),
    };
    setTweets((prevValues) => [newTweet, ...prevValues]);
    firebase.db.collection("tweets").add(newTweet);
    reset();
  };

  return (
    <form className="w-100" onSubmit={handleSubmit(handleTweet)}>
      <img
        src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
        className="mx-3"
        alt="user"
        height="48"
        width="48"
      />
      <input
        className="tweet-input"
        name="tweet"
        type="text"
        placeholder="What's happening?"
        autoComplete="off"
        ref={register}
      />
      <div className="text-right mx-5 pt-3">
        <button
          className="btn btn-primary rounded-pill"
          type="submit"
          disabled={!watchTweet}
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetInput;
