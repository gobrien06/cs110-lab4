import React, { useEffect } from "react";
import { PostForm } from "../components/PostForm/PostForm";
import { Thread } from "../components/Thread/Thread";
import "./Chat.css";

export const Chat = () => {
  const [messages, setMessages] = React.useState([]);
  useEffect(() => console.log(messages), [messages]);
  return (
    <div className="chatContain">
      <PostForm setMessages={setMessages} />
      {messages && messages.map((msg, index) => (
        <Thread
          key={index}
          index={index}
          messages={msg}
        />
      ))}
    </div>
  );
};
