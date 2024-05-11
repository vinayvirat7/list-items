import React, { useCallback, useMemo } from "react";
import Post from "./PostDetails";
import { Link, useNavigate } from "react-router-dom";
import PostItem from "./PostItem";

const Posts = ({ posts, loading }) => {
  const navigate = useNavigate();

  const handlePostClick = useCallback((id) => {
    console.log("Inside parent component handle click");
    navigate(`posts/${id}`);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <PostItem post={post} onClick={handlePostClick} />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
