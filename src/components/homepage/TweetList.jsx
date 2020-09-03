import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets, handleLove, user }) => {
  return (
    <ul className="list-unstyled text-white">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          handleLove={handleLove}
          user={user}
        />
      ))}
    </ul>
  );
};

export default TweetList;
