import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets, handleLove }) => {
  console.log(tweets);

  return (
    <ul className="list-unstyled text-white">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} handleLove={handleLove} />
      ))}
    </ul>
  );
};

export default TweetList;
