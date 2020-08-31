import React from "react";

const Trends = () => {
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search Twitter"
      />
      <i className="fas fa-search search-icon"></i>
      <div className="rounded bg-custom mt-3 py-3">
        <h5 className="text-white ml-3">World Trends</h5>
        <hr className="bg-customLine" />
        <div className="ml-3">
          <p className="text-muted m-0">1 · Entertainment · Trending</p>
          <h5 className="text-white m-0">#VMAs</h5>
          <p className="text-muted m-0">260k Tweets</p>
        </div>
        <hr className="bg-customLine" />
        <div className="ml-3">
          <p className="text-muted m-0">2 · Entertainment · Trending</p>
          <h5 className="text-white m-0">#VMAs</h5>
          <p className="text-muted m-0">260k Tweets</p>
        </div>
        <hr className="bg-customLine" />
        <div className="ml-3">
          <p className="text-muted m-0">3 · Entertainment · Trending</p>
          <h5 className="text-white m-0">#VMAs</h5>
          <p className="text-muted m-0">260k Tweets</p>
        </div>
        <hr className="bg-customLine" />
        <button type="button" className="btn btn-link text-decoration-none">
          Show more
        </button>
      </div>
    </>
  );
};

export default Trends;
