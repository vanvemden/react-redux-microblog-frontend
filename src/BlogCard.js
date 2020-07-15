import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

function BlogCard({ post }) {

  return (
    <Card className="BlogCard">
      <CardBody>
        <CardTitle><Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link></CardTitle>
        <CardSubtitle>{post.description}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default BlogCard;