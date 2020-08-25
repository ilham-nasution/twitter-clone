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
              <button className="btn btn-primary px-5 mt-4">Tweet</button>
            </div>
            <div className="text-center">
              <button
                onClick={() => firebase.logout()}
                className="btn btn-primary px-5 mt-4"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="col-6 border-right">
            <h3 className="text-white">Home</h3>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
