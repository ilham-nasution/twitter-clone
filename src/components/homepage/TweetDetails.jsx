import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { useParams, useHistory } from "react-router-dom";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import firebase from "../../firebase/firebase";

const TweetDetails = () => {
  let history = useHistory();
  const [tweet, setTweet] = useState({ tweetBy: {} });
  const { tweet_id } = useParams();

  useEffect(() => {
    firebase.db
      .collection("tweets")
      .doc(tweet_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setTweet(doc.data());
        } else {
          alert("not found!!");
        }
      });
  }, [tweet_id]);

  return (
    <>
      <div className="ml-3 my-2 text-white d-flex align-items-center">
        <button
          onClick={() => history.push("/home")}
          className="twitter-btn h6 m-0"
        >
          <i className="fas fa-arrow-left text-primary"></i>
        </button>
        <h5 className="m-0 font-weight-bold ml-4">Tweet</h5>
      </div>
      <div className="text-white border-bottom border-top border-customLine p-3">
        <div className="d-flex align-items-center mb-3">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
            className="mr-3"
            alt="user"
            height="48"
            width="48"
          />
          <div>
            <h5 className="m-0">
              {tweet.tweetBy.username}
              <p className="text-muted m-0">
                <small>@{tweet.tweetBy.username}</small>
              </p>
            </h5>
          </div>
        </div>
        <div className="border-bottom border-customLine">
          <h3>{tweet.tweet}</h3>
          <p className="text-muted">
            {tweet.created_at && format(tweet.created_at, "	PPpp")}
          </p>
        </div>
        <div className="border-bottom border-customLine mt-3">
          <p className="text-muted">
            <span className="text-white">
              {tweet.comments && tweet.comments.length}
            </span>{" "}
            Retweets and comments{" "}
            <span className="text-white ml-3">{tweet.loveCount}</span> Likes
          </p>
        </div>
        <div className="row justify-content-between mt-2 px-5">
          <button className="twitter-btn h6 m-0">
            <i className="far fa-comment"></i>
          </button>
          <button className="twitter-btn h6 m-0">
            <i className="fas fa-retweet"></i>
          </button>
          <button className="twitter-btn h6 m-0">
            <i className="far fa-heart"></i>
          </button>
          <button className="twitter-btn h6 m-0">
            <i className="far fa-share-square"></i>
          </button>
        </div>
      </div>
      <ul className="list-unstyled text-white">
        {tweet.comments &&
          tweet.comments.map((comment) => (
            <li
              key={comment.created_at}
              className="media border-bottom border-customLine mt-3"
            >
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                className="mx-3"
                alt="user"
                height="48"
                width="48"
              />
              <div className="media-body px-3">
                <h5 className="mt-0 mb-1">
                  {comment.postedBy.name}
                  <span className="text-muted ml-2">
                    <small>
                      @{comment.postedBy.name} ·{" "}
                      {formatDistanceToNowStrict(comment.created_at)}
                    </small>
                  </span>
                </h5>
                {comment.text}

                <div className="row justify-content-between mt-2 mr-5">
                  <button className="twitter-btn h6">
                    <i className="far fa-comment"></i>
                  </button>

                  <button className="twitter-btn h6">
                    <i className="fas fa-retweet"></i>
                  </button>
                  <button className="twitter-btn h6">
                    <i className="far fa-heart"></i>
                  </button>
                  <button className="twitter-btn h6">
                    <i className="far fa-share-square"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TweetDetails;
