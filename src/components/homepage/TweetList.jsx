import React, { useContext } from "react";
import Tweet from "./Tweet";
import firebase from "../../firebase/firebase";
import { UserContext } from "../../contexts/UserContext";

const TweetList = ({ tweets, setTweets }) => {
  const user = useContext(UserContext);

  const handleLove = (id) => {
    firebase.db
      .collection("tweets")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const previousLoves = doc.data().loves;
          const username = user.displayName;
          if (previousLoves.includes(user.displayName)) {
            const updatedLoves = previousLoves.filter(
              (love) => love !== username
            );
            firebase.db
              .collection("tweets")
              .doc(id)
              .update({ loves: updatedLoves, loveCount: updatedLoves.length });
            const result = tweets.map((tweet) => {
              if (tweet.id === id) {
                tweet.loves = updatedLoves;
                tweet.loveCount = updatedLoves.length;
              }
              return tweet;
            });
            setTweets(result);
          } else {
            const updatedLoves = [...previousLoves, username];
            firebase.db
              .collection("tweets")
              .doc(id)
              .update({ loves: updatedLoves, loveCount: updatedLoves.length });
            const result = tweets.map((tweet) => {
              if (tweet.id === id) {
                tweet.loves = updatedLoves;
                tweet.loveCount = updatedLoves.length;
              }
              return tweet;
            });
            setTweets(result);
          }
        }
      });
  };

  return (
    <ul className="list-unstyled text-white">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} handleLove={handleLove} />
      ))}
    </ul>
  );
};

export default TweetList;
