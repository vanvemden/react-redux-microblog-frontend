import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { Button } from "reactstrap";

function BlogPost() {

  const { postId } = useParams();
  const post = useSelector(
    state => state.posts.find(
      post => post.id === postId
    ), shallowEqual
  );

  if (!post) { return <Redirect to="/" /> }

  return (
    <div className="BlogPost">
      <h1>{post.title}</h1>
      <h4>{post.description}</h4>
      <p>{post.body}</p>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  )
}

export default BlogPost;