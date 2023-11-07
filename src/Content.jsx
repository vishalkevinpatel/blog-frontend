// imports useState Hook to keep track of data
import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  // import and call modal
  // giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  let posts = [
    {
      id: 1,
      title: "Blog post 1",
      body: "This is the body of my first blog post, it has arms and legs like a real body",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqEyQEa24BuQtSMOjPc24kGBmGMDj4g5p4TDXwdp6vQ&s",
    },
    {
      id: 2,
      title: "Blog post 2",
      body: "This is the body of my second blog post, it has even less substance than the first!",
      image_url:
        "https://thumbs.dreamstime.com/b/hand-drawn-mason-jar-glass-container-empty-kitchen-pot-lid-contour-sketch-hand-drawn-mason-jar-glass-container-empty-kitchen-253357558.jpg",
    },
    {
      id: 3,
      title: "Blog post 3",
      body: "Boy howdy I wasn't expecting to get to a third",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqEyQEa24BuQtSMOjPc24kGBmGMDj4g5p4TDXwdp6vQ&s",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>Test</p>
      </Modal>
    </div>
  );
}
