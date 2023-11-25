import React from "react";
import { Route, Routes } from "react-router-dom";
import AllBlogs from "../View/AllBlogs";
import AddBlog from "../View/AddBlog";
import SingleBlog from "../View/SingleBlog";


function AllRoute() {
  return <Routes>
    <Route path="/" element={<AllBlogs/>}/>
    <Route path="/addblog" element={<AddBlog/>}/>
    <Route path="/:id" element={<SingleBlog/>}/>
  </Routes>;
}

export default AllRoute;
