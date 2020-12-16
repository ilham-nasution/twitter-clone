import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import firebase from "../../firebase/firebase";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

const Comment = () => {
  const user = useContext(UserContext);
  const [tweet, setTweet] = useState({ tweetBy: {} });
  let history = useHistory();
  let { id } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    firebase.db
      .collection("tweets")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setTweet(doc.data());
        } else {
          console.log("not found!!");
        }
      });
  }, [id]);

  const handleComment = (values) => {
    firebase.db
      .collection("tweets")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const previousComments = doc.data().comments;
          const comment = {
            postedBy: { id: user.uid, name: user.displayName },
            created_at: Date.now(),
            text: values.tweet,
          };
          const updatedComments = [...previousComments, comment];
          firebase.db
            .collection("tweets")
            .doc(id)
            .update({ comments: updatedComments });
          history.push(`/${doc.data().tweetBy.username}/status/${doc.id}`);
        }
      });
  };

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
                  {tweet.tweetBy.username}
                  <span className="text-muted ml-2">
                    <small>
                      @{tweet.tweetBy.username} ·{" "}
                      {tweet.created_at &&
                        formatDistanceToNowStrict(tweet.created_at)}
                    </small>
                  </span>
                </h5>
                {tweet.tweet}
                <p className="text-muted mt-3">
                  Replying to{" "}
                  <a href="#" className="text-decoration-none">
                    @{tweet.tweetBy.username}
                  </a>
                </p>
              </div>
            </div>
            <form className="mt-4" onSubmit={handleSubmit(handleComment)}>
              <div className="d-flex">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                  className="mr-3"
                  alt="user"
                  height="48"
                  width="48"
                />
                <input
                  className="reply-input"
                  name="tweet"
                  type="text"
                  placeholder="Tweet your reply"
                  autoComplete="off"
                  ref={register}
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
