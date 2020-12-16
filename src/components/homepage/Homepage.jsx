import React, { useEffect, useState, useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import TweetList from "./TweetList";
import TweetInput from "./TweetInput";
import Trends from "./Trends";
import TweetDetails from "./TweetDetails";
import Comment from "./Comment";
import firebase from "../../firebase/firebase";
import { UserContext } from "../../contexts/UserContext";

const Homepage = () => {
  let history = useHistory();
  const [tweets, setTweets] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    firebase.db
      .collection("tweets")
      .orderBy("created_at", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };
          setTweets((prevValues) => [...prevValues, data]);
        });
      });
  }, []);

  return (
    <>
      <Route exact path="/compose/tweet/:id">
        <Comment />
      </Route>
      <div className="container-fluid vh-100 px-5">
        <div className="row h-100">
          <div className="col-3 border-right border-customLine">
            <Sidebar />
          </div>
          <div className="col-6 border-right m-0 p-0 border-customLine">
            <Route exact path="/home">
              <h4 className="text-white font-weight-bold ml-3 my-2">Home</h4>
              <div className="row border-top m-0 pt-4 border-customLine">
                <TweetInput setTweets={setTweets} />
              </div>
              <hr className="bg-customLine py-1" />
              {user ? (
                <TweetList tweets={tweets} setTweets={setTweets} />
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
            </Route>
            <Route exact path="/:username/status/:tweet_id">
              <TweetDetails />
            </Route>
          </div>
          <div className="col-3">
            <Trends />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
