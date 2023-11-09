// imports useState Hook to keep track of data
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";

export function Content() {
  // import and call modal
  // giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [posts, setPosts] = useState([]);
  //creates react variable that can be set
  const [currentPost, setCurrentPost] = useState({});

  //function to make web requests to index data
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
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

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
