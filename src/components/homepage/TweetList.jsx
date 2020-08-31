import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <ul className="list-unstyled text-white">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetList;
