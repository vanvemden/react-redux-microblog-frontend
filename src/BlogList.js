import React from 'react'
import BlogCard from "./BlogCard"
import { useSelector, shallowEqual } from "react-redux";
import { Row, Col } from "reactstrap";

function BlogList() {
  const { posts } = useSelector((store) => store, shallowEqual);
  return (
    <div className="BlogList">
      <Row>
        <Col>
          <p className="mb-4">Welcome to <b>Microblog</b>, Olivia, Marco and Harry's safe space for expressing your feelings :)</p>
        </Col>
      </Row>
      <Row>
        {Object.entries(posts).map(([key, post]) => (
          <BlogCard post={post} id={key} key={key} />
        ))}
      </Row>
    </div>
  )
}

export default BlogList;