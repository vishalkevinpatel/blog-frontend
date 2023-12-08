/* eslint-disable react/prop-types */
// moved index of posts into its own file
import { useState } from "react";

export function PostsIndex(props) {
  console.log(props);

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index" className="container">
      AYO SEARCH HERE: <span></span>
      <input
        placeholder="type here"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        list="titles"
      />
      <datalist id="titles">
        {searchFilter.length < 3 ? (
          <span></span>
        ) : (
          props.posts.map((post) => <option key={post.id} value={post.title} />)
        )}
      </datalist>
      {/* loop of defined recipe data props from the parent component */}
      <p></p>
      <div className="container">
        <div className="p-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {props.posts
              .filter((post) => post.title.toLowerCase().startsWith(searchFilter.toLowerCase()))
              .map((post) => (
                <div className="col" key={post.id}>
                  <div className="card-deck text-white bg-dark justify-content-center" style={{ height: "50rem" }}>
                    <div className="text-center">
                      <h2 className="p-3">{post.title}</h2>
                    </div>
                    <div className="p-3 w-90 d-flex">
                      <p className="card-body text-center">{post.body} </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={post.image} className="w-75 p-3" alt="blog post pics" />
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => props.onShowPost(post)}
                      >
                        More Info!
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
