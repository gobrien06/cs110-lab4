import React from "react";
import { Post } from "../Post/Post";
import { PostForm } from "../PostForm/PostForm";
import "./Thread.css";

export const Thread = ({ messages }) => {
  const [thread, setThread] = React.useState(messages);
  const [reply, setReply] = React.useState(false);
  console.log("we have a thread", thread);
  return (
    <div className="thread">
      {thread.map((msg, indexMsg) => (
        <Post
          key={indexMsg}
          setMessages={setThread}
          messages={thread}
          message={msg}
        />
      ))}
      <button type="button" onClick={() => setReply(!reply)}>
        reply
      </button>
      {reply && <PostForm nested messages={thread} setMessages={setThread} />}
    </div>
  );
};
