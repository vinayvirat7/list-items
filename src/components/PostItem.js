import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function PostItem({ post, onClick }) {
  const heavyComputation = (id) => {
    // Perform some expensive computation using the data
    // This could be anything from sorting a large array to
    // making a network request
    let sum = 0;
    for (let index = 0; index < 10000000; index++) {
      sum = index - id;
      sum = index + id;
    }
    return sum;
  };

  console.log("Inside post item", post.id);

  const handlePostClick = () => {
    onClick(post.id);
  };

  const memoizedValue = useMemo(() => heavyComputation(post.id), [post.id]);

  return (
    <div onClick={handlePostClick}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{memoizedValue}</p>
    </div>
  );
}

export default PostItem;
