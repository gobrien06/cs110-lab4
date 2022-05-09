import React from "react";
import { Thread } from "../Thread/Thread";
import "./Post.css";

export const Post = ({ message }) => {
  return (
    <>
      {message.length > 0 ? (
        <Thread messages={message} />
      ) : (
        <>
          <div className="post">
            <h3>{message.name}</h3>
            <p>{message.post}</p>
          </div>
        </>
      )}
    </>
  );
};
