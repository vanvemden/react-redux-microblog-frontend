import React from "react";
import { Button } from "reactstrap";
import { removeComment } from "./actions";
import { useDispatch } from "react-redux";

function CommentCard({ comment }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(removeComment(id));
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