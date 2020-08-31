import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import TweetList from "./TweetList";
import TweetInput from "./TweetInput";
import firebase from "../../firebase/firebase";
import firebaseContext from "../../firebase/context";

const Homepage = () => {
  let history = useHistory();
  const [tweets, setTweets] = useState([]);
  const { user } = useContext(firebaseContext);
  const [value, setValue] = useState("");

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
    setTweets((prevValues) => [...prevValues, newTweet]);
    firebase.db.collection("tweets").add(newTweet);
    setValue("");
  };

  return (
    <div className="bg-secondary">
      <div className="container-fluid vh-100">
        <div className="row h-100 ">
          <div className="col-3 border-right">
            <Sidebar user={user} />
          </div>
          <div className="col-6 border-right m-0 p-0">
            <h3 className="text-white ml-3 mt-3">Home</h3>
            <div className="row border-top m-0 pt-4">
              <TweetInput
                handleTweet={handleTweet}
                value={value}
                setValue={setValue}
              />
            </div>
            <hr className="bg-light py-2" />
            {user ? (
              <TweetList tweets={tweets} />
            ) : (
              <div className="text-white text-center mt-5">
                <h1>Don't miss what's happening</h1>
                <button
                  onClick={() => history.push("/")}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            )}
          </div>
          <div className="col-3">
            <input
              type="text"
              className="search-input"
              placeholder="Search Twitter"
            />
            <i className="fas fa-search search-icon"></i>
            <div className="rounded bg-custom mt-3 py-3">
              <h5 className="text-white ml-3">World Trends</h5>
              <hr className="bg-white" />
              <div className="ml-3">
                <p className="text-muted">1 · Entertainment · Trending</p>
                <h5 className="text-white">#VMAs</h5>
                <p className="text-muted">260k Tweets</p>
              </div>
              <hr className="bg-white" />
              <div className="ml-3">
                <p className="text-muted">2 · Entertainment · Trending</p>
                <h5 className="text-white">#VMAs</h5>
                <p className="text-muted">260k Tweets</p>
              </div>
              <hr className="bg-white" />
              <div className="ml-3">
                <p className="text-muted">3 · Entertainment · Trending</p>
                <h5 className="text-white">#VMAs</h5>
                <p className="text-muted">260k Tweets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
