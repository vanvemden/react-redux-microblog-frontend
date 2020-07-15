import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addPost } from "./actions";
import { Form, Label, Input, Button, FormGroup } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = { title: "", description: "", body: "" }

function BlogForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addPost({ ...formData, id: uuidv4() }));
    setFormData(INITIAL_STATE);
    history.push('/');
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }))
  }

  const handleCancel = evt => {
    // prompt user for confirmation
    if (window.confirm('Are you sure you want to cancel?')) {
      // on cancel, redirect to homepage
      history.push("/");
    }
  }

  //how do we handle cancel????
  return (
    <div className="BlogForm">
      <h3>New Post</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="body">Body</Label>
          <Input type="textarea" name="body" id="body" value={formData.body} onChange={handleChange} />
        </FormGroup>
        <Button color="primary">Save</Button>
        <Button onClick={handleCancel} color="danger">Cancel</Button>
      </Form>
    </div>
  )
}


export default BlogForm;