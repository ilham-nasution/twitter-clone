import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import firebase from "../../firebase/firebase";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    firebase.db
      .collection("tweets")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTweets((prevValues) => [...prevValues, doc.data()]);
        });
      });
  }, []);

  return (
    <ul className="list-unstyled text-white">
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetList;
