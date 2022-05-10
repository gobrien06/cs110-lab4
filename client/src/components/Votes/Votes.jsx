import React, { useState } from 'react';
import {ReactComponent as DownvoteImg} from "../../images/downvote.svg";
import {ReactComponent as UpvoteImg} from "../../images/upvote.svg";
import "./Votes.css";

export function Vote() {
  const [count, setCount] = useState(0);

function decrement(){
    setCount(prevCount => prevCount -1)
}

function increment(){
    setCount(prevCount => prevCount +1)
}

  return (
    <div className = "vote">
      <div>
      <button onClick = {increment}>
      <UpvoteImg height = {25}/>
      </button>
      </div>

      
      <span>{count}</span>
      

      <div>
      <button onClick = {decrement}>
      <DownvoteImg height = {25} />
      </button>
      </div>
    </div>
  )
}

