import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap';

function BlogCard({ post }) {

  return (
    <Col sm="6">
      <Card className="BlogCard mb-3">
        <CardBody>
          <CardTitle><Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link></CardTitle>
          <CardSubtitle>{post.description}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BlogCard;