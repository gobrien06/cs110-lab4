import React from "react";
import { Post } from "../Post/Post";
import { PostForm } from "../PostForm/PostForm";
import {ReactComponent as ChatImg} from "../../images/chat.svg";
import "./Thread.css";

export const Thread = ({ messages, top }) => {
  const [thread, setThread] = React.useState(messages);
  const [reply, setReply] = React.useState(false);
  console.log("we have a thread", thread);
  return (
    <div className={top ? "threadtop" : "thread"}>
      <div className="line">
        {thread.map((msg, indexMsg) => (
          <Post key={indexMsg} message={msg} />
        ))}
      </div>
      <button type="button" onClick={() => setReply(!reply)}>
        <ChatImg height={30} />
        reply
      </button>
      {reply && <PostForm nested messages={thread} setMessages={setThread} />}
    </div>
  );
};
