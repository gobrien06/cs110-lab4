import React, { useState } from 'react';
import {ReactComponent as DownvoteImg} from "../../images/downvote.svg";
import {ReactComponent as UpvoteImg} from "../../images/upvote.svg";

export function Vote() {
  const [count, setCount] = useState(0);

function decrement(){
    setCount(prevCount => prevCount -1)
}

function increment(){
    setCount(prevCount => prevCount +1)
}

  return (
    <>
      <button onClick = {increment}>
      <UpvoteImg height = {25}/>
      </button>

      <span>{count}</span>

      <button onClick = {decrement}>
      <DownvoteImg height = {25} />
      </button>
    </>
  )
}

