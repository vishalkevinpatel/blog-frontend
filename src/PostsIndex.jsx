/* eslint-disable react/prop-types */
// moved index of posts into its own file
export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index" className="container">
      <h1 className="d-flex justify-content-center">All posts</h1>
      {/* loop of defined recipe data props from the parent component */}
      <p></p>
      <div className="container">
        <div className="card text-black">
          {props.posts.map((post) => (
            <div key={post.id}>
              <div className="text-center">
                <h2 className="card-title">{post.title}</h2>
              </div>
              <div className="d-flex justify-content-center">
                <div className="w-50 d-flex">
                  <p className="card-body text-center">{post.body} </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <img src={post.image} className="img-thumbnail" alt="blog post pics" />
              </div>
              <div className="text-center">
                <button onClick={() => props.onShowPost(post)}>More Info!</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
