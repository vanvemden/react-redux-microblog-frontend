import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { removePostFromApi, loadPostFromApi } from "./actions";
import BlogForm from "./BlogForm";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function BlogPost() {
  const [edit, setEdit] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector(state => state.posts[postId], shallowEqual);

  useEffect(() => {
    if (!post) {
      dispatch(loadPostFromApi(postId));
    }
  }, [dispatch]);

  if (!post) { return <Redirect to="/" /> }

  const handleDelete = id => {
    // prompt user for confirmation
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(removePostFromApi(id));
      history.push('/');
    }
  }

  return (
    <div className="BlogPost">
      {edit ?
        <BlogForm id={postId} post={post} setEdit={setEdit} />
        :
        <div>
          <h1>{post.title}</h1>
          <h5><i>{post.description}</i></h5>
          <p>{post.body}</p>
          <Button color="info" onClick={() => setEdit(true)}>Edit</Button>
          <Button color="danger" onClick={() => handleDelete(postId)}>Delete</Button>
          <CommentList comments={post.comments} postId={postId} />
          <CommentForm postId={postId} />
        </div>
      }
    </div>
  )
}
export default BlogPost;