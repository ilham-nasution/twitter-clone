import React from "react";

const TweetInput = ({ handleTweet, value, setValue }) => {
  return (
    <form className="w-100" onSubmit={handleTweet}>
      <img
        src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
        className="mx-3"
        alt="user"
        height="48"
        width="48"
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="tweet"
        className="tweet-input"
        type="text"
        placeholder="What's happening?"
      />
      <div className="text-right mx-5 pt-3">
        <button
          className="btn btn-primary rounded-pill"
          type="submit"
          disabled={!value}
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetInput;
