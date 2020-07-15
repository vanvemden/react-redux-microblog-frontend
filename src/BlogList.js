import React from 'react'
import BlogCard from "./BlogCard"
import { useSelector, shallowEqual } from "react-redux";

function BlogList() {
  const { posts } = useSelector((store) => store, shallowEqual);
  return (
    <div className="BlogList">
      {posts.map(post => (
        <BlogCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default BlogList;