// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

function CustomLogo() {
  return (
    <div className="star">{/* <img className="logo" src="https://www.svgrepo.com/show/220702/star-vip.svg" /> */}</div>
  );
}

function App() {
  return (
    <div>
      <body>
        <Header />
        <CustomLogo />
        <Content />
        <Footer />
      </body>
    </div>
  );
}

export default App;
