import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    };

    fetchPost();
  }, [id]);

  return (
    <div className="list-group-item">
      <p>Post details {id}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default Post;
