// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// moving header into its own function
function Header() {
  return (
    // header
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

// creating new posts moved into own function
function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Post your blog post</button>
      </form>
    </div>
  );
}

// moved index of posts into its own function
function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        <h2>Blog post 1</h2>
        <p>This is the body of my first blog post, it has arms and legs like a real body</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqEyQEa24BuQtSMOjPc24kGBmGMDj4g5p4TDXwdp6vQ&s"
          alt="stock art of blog post"
        />
      </div>
      <div>
        <h2>Blog post 2</h2>
        <p>This is the body of my second blog post, it has even less substance than the first!</p>
        <img
          src="https://thumbs.dreamstime.com/b/hand-drawn-mason-jar-glass-container-empty-kitchen-pot-lid-contour-sketch-hand-drawn-mason-jar-glass-container-empty-kitchen-253357558.jpg"
          alt="empty jar"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2049</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
