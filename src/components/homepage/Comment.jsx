import React from "react";
import { useHistory } from "react-router-dom";

const Comment = () => {
  let history = useHistory();

  return (
    <div className="comment-modal">
      <div className="modal-dialog shadow">
        <div className="modal-content bg-secondary text-white">
          <div className="border-bottom border-customLine">
            <button
              onClick={() => history.push("/home")}
              type="button"
              className="btn btn-link m-2"
            >
              <h4 className="m-0">
                <i className="fas fa-times text-primary"></i>
              </h4>
            </button>
          </div>
          <div className="modal-body">
            <div className="media">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                className="mr-2"
                alt="user"
                height="48"
                width="48"
              />
              <div className="media-body px-3">
                <h5 className="my-0">
                  Username
                  <span className="text-muted ml-2">
                    <small>@Username · 2h</small>
                  </span>
                </h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
                iusto maiores tempora ipsum unde corporis recusandae! Porro ea
                rem labore consequatur corporis dicta vel! Beatae exercitationem
                nam laborum nulla.
                <p className="text-muted mt-3">
                  Replying to{" "}
                  <a href="#" className="text-decoration-none">
                    @username
                  </a>
                </p>
              </div>
            </div>
            <form className="mt-4">
              <div className="d-flex">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                  className="mr-3"
                  alt="user"
                  height="48"
                  width="48"
                />
                <input
                  name="tweet"
                  className="reply-input"
                  type="text"
                  placeholder="Tweet your reply"
                />
              </div>
              <div className="text-right mt-5">
                <button className="btn btn-primary rounded-pill" type="submit">
                  Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
