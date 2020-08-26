import React from "react";

import CommentCard from "./CommentCard";
import { Container } from "reactstrap";

function CommentList({ postId, comments }) {
  return (
    <div className="CommentList mt-4">
      <h5>Comments</h5>
      {comments ? (
        <Container>
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} postId={postId} />
          ))}
        </Container>
      ) : (
        <p>No comments yet :(</p>
      )}
    </div>
  );
}

export default CommentList;
