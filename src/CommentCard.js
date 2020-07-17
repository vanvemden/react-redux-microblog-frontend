import React from "react";
import { Button } from "reactstrap";
import { removeCommentFromApi } from "./actions";
import { useDispatch } from "react-redux";

function CommentCard({ comment, postId }) {
  const dispatch = useDispatch();

  const handleDelete = commentId => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(removeCommentFromApi(postId, commentId));
    }
  }

  return (
    <div className="CommentCard">
      <p>
        <Button color="danger" onClick={() => handleDelete(comment.id)}>X</Button>
        {comment.text}
      </p>
    </div>
  );
}

export default CommentCard;