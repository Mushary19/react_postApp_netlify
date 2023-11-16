import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
         <Link to="/postPage/1">Post 1</Link>
        <br />
        <Link to="/postPage/2">Post 2</Link>
        <br />
        <Link to="/postPage/3">Post 3</Link>
        <br />
        <Link to="/postPage/newPost">New Post</Link>
        <Outlet />
    </>
  )
}

export default PostLayout