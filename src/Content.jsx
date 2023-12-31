// imports useState Hook to keep track of data
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
// import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { PostsShowPage } from "./PostsShowPage";

export function Content() {
  // import and call modal
  // giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [posts, setPosts] = useState([]);
  //creates react variable that can be set
  const [currentPost, setCurrentPost] = useState({});

  //function to make web requests to index data
  const handleIndexPosts = () => {
    axios.get("https://blog-zspf.onrender.com/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  //a function to toggle modal show on
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("https://blog-zspf.onrender.com/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`https://blog-zspf.onrender.com/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      setCurrentPost(response.data);
      setIsPostsShowVisible(false);
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`https://blog-zspf.onrender.com/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((thispost) => thispost.id !== post.id));
      console.log(response);
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <h1>🤘</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postsnew" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/postsindex" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
      {/* <div className="d-flex justify-content-center">
        <LogoutLink />
      </div> */}
    </div>
  );
}
