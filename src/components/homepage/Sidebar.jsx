import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import firebaseContext from "../../firebase/context";

const Sidebar = () => {
  let history = useHistory();
  const { user, firebase } = useContext(firebaseContext);

  const handleLogout = () => {
    firebase.logout();
    history.push("/");
  };

  return (
    <div className="position-fixed">
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
      {user && (
        <div className="text-center">
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-block mt-4 rounded-pill"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
