import React, { useState } from 'react';
import { Form, Input, Button, FormGroup } from "reactstrap";
import { addComment } from "./actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function CommentForm({ postId }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = evt => {
    const { value } = evt.target;
    setText(value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let id = uuidv4();
    dispatch(addComment(postId, { text, id }));
  }

  return (
    <div className="CommentForm">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input placeholder="Add a new comment" type="text" name="text" id="text" value={text} onChange={handleChange} />
        </FormGroup>
        <Button color="primary">Save</Button>
      </Form>
    </div>
  );
}

export default CommentForm;