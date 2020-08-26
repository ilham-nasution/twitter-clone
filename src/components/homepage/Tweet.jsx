import React from "react";

const Tweet = () => {
  return (
    <li className="media border-bottom">
      <img
        src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
        className="mx-3"
        alt="user"
        height="48"
        width="48"
      />
      <div className="media-body px-3">
        <h5 className="mt-0 mb-1">
          Username
          <span className="text-muted ml-2">
            <small>@username · 9m</small>
          </span>
        </h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis.
        <div className="row justify-content-between mt-2">
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
  );
};

export default Tweet;
