import React from "react";
import "./PostForm.css";

export const PostForm = ({ nested, setMessages }) => {
  const [name, setName] = React.useState();
  const [content, setContent] = React.useState();
  return (
    <form className="postContainer">
      {nested ? <br /> : <h2>New Post</h2>}
      <input
        id="name"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        id="content"
        placeholder="Write a new post..."
        type="textarea"
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button
        type="submit"
        disabled={!name || !content}
        onClick={(e) => {
          e.preventDefault();
          setMessages((prev) => [...prev, [{ name, post: content }]]);
        }}
      >
        Submit
      </button>
    </form>
  );
};
