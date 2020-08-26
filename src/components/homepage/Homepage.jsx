import React from "react";
import Sidebar from "./Sidebar";
import TweetList from "./TweetList";
import TweetInput from "./TweetInput";

const Homepage = () => {
  return (
    <div className="bg-secondary">
      <div className="container-fluid vh-100">
        <div className="row h-100 ">
          <div className="col-3 border-right">
            <Sidebar />
          </div>
          <div className="col-6 border-right m-0 p-0">
            <h3 className="text-white ml-3 mt-3">Home</h3>
            <div className="row border-top m-0 pt-4">
              <TweetInput />
            </div>
            <hr className="bg-light py-2" />
            <TweetList />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
