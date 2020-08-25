import React from "react";
import firebase from "../../firebase/firebase";

const Homepage = () => {
  return (
    <div className="bg-secondary">
      <div className="container-fluid vh-100">
        <div className="row h-100 ">
          <div className="col-3 border-right">
            <button className="twitter-btn">
              <i className="fab fa-twitter "></i>
            </button>
            <button className="twitter-btn">
              <i className="fas fa-home mr-2"></i> Home
            </button>
            <button className="twitter-btn">
              <i class="fas fa-hashtag mr-2"></i> Explore
            </button>
            <button className="twitter-btn">
              <i class="far fa-bell mr-2"></i> Notifications
            </button>
            <button className="twitter-btn">
              <i class="far fa-envelope mr-2"></i> Messages
            </button>
            <button className="twitter-btn">
              <i class="far fa-bookmark mr-2"></i> Bookmarks
            </button>
            <button className="twitter-btn">
              <i class="far fa-list-alt mr-2"></i> Lists
            </button>
            <button className="twitter-btn">
              <i class="far fa-user mr-2"></i> Profile
            </button>
            <button className="twitter-btn">
              <i class="far fa-dot-circle mr-2"></i> More
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
          </div>
          <div className="col-6 border-right m-0 p-0">
            <h3 className="text-white ml-3 mt-3">Home</h3>
            <div className="row border-top m-0 pt-4">
              <form className="w-100">
                <span className="h1 text-white mx-3">
                  <i className="fas fa-user-circle"></i>
                </span>
                <input
                  className="tweet-input"
                  type="text"
                  placeholder="What's happening?"
                />

                <div className="text-right mx-5 border-top mt-5 pt-3">
                  <button
                    className="btn btn-primary rounded-pill"
                    type="submit"
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>
            <hr className="bg-light py-2" />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
