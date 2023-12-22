import React, { useState } from "react";

function Actions() {
  const [likes, setLikes] = useState(0);

  const increment = () => {
    setLikes(likes + 1);
  };

  const decrement = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>like</button>
      <button onClick={decrement} disabled={likes === 0}>
        dislike
      </button>
    </div>
  );
}

export default Actions;