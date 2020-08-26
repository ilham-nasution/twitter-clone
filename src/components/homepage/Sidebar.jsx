import React from "react";
import firebase from "../../firebase/firebase";

const Sidebar = () => {
  return (
    <>
      <button className="twitter-btn">
        <i className="fab fa-twitter "></i>
      </button>
      <button className="twitter-btn">
        <i className="fas fa-home mr-2"></i> Home
      </button>
      <button className="twitter-btn">
        <i className="fas fa-hashtag mr-2"></i> Explore
      </button>
      <button className="twitter-btn">
        <i className="far fa-bell mr-2"></i> Notifications
      </button>
      <button className="twitter-btn">
        <i className="far fa-envelope mr-2"></i> Messages
      </button>
      <button className="twitter-btn">
        <i className="far fa-bookmark mr-2"></i> Bookmarks
      </button>
      <button className="twitter-btn">
        <i className="far fa-list-alt mr-2"></i> Lists
      </button>
      <button className="twitter-btn">
        <i className="far fa-user mr-2"></i> Profile
      </button>
      <button className="twitter-btn">
        <i className="far fa-dot-circle mr-2"></i> More
      </button>
      <div className="text-center">
        <button className="btn btn-primary btn-block mt-4 rounded-pill">
          Tweet
        </button>
      </div>
      <div className="text-center">
        <button
          onClick={() => firebase.logout()}
          className="btn btn-primary btn-block mt-4 rounded-pill"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
