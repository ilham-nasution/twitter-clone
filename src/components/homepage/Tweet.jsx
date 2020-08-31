import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { Link } from "react-router-dom";

const Tweet = ({ tweet }) => {
  return (
    <Link
      className="text-decoration-none text-white"
      to={`/${tweet.tweetBy.username}/${tweet.id}`}
    >
      <li className="media border-bottom border-customLine mt-3">
        <img
          src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
          className="mx-3"
          alt="user"
          height="48"
          width="48"
        />
        <div className="media-body px-3">
          <h5 className="mt-0 mb-1">
            {tweet.tweetBy.username}
            <span className="text-muted ml-2">
              <small>
                @{tweet.tweetBy.username} ·{" "}
                {formatDistanceToNowStrict(tweet.created_at)}
              </small>
            </span>
          </h5>
          {tweet.tweet}
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
    </Link>
  );
};

export default Tweet;
