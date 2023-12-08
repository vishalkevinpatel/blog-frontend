// moving header into its own file

import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <Link to="/signup" className="dropdown-item">
            Signup
          </Link>
          <Link to="/login" className="dropdown-item">
            Login
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <LogoutLink />
        </li>
      </>
    );
  }

  return (
    <header>
      {/* header new borrowed from bootstrap */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            the blog about nothing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
                {/* logging in links */}
                <Link to="/postsnew" className="dropdown-item">
                  New Post
                </Link>
                <Link to="/postsindex" className="dropdown-item">
                  All Posts
                </Link>
              </li>
              {authenticationLinks}
              <li>
                <a className="dropdown-item" href="#footers">
                  Straight to the BOTTOM
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="ayo this doesn't work right now"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      {/* header old */}
      {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
    </header>
  );
}
