import React from "react";

import CommentCard from "./CommentCard";
import { useSelector, shallowEqual } from "react-redux";
import { Row } from "reactstrap";

function CommentList({ postId }) {
  const comments = useSelector((store) => store.comments[postId], shallowEqual);
  console.log("Comments:", comments);

  return (
    <div className="CommentList">
      <Row>
        {comments && comments.map(comment => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </Row>
    </div>
  );
}

export default CommentList;






















