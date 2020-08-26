import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { loadPostsFromApi } from "./actions";
import { Row } from "reactstrap";

function BlogList() {
  const titles = useSelector((store) => store.titles, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsFromApi());
  }, [dispatch]);

  return (
    <div className="BlogList">
      <Row>
        {titles
          .sort((a, b) => b.votes - a.votes)
          .map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
      </Row>
    </div>
  );
}

export default BlogList;
