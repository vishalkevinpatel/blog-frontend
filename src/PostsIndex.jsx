// moved index of posts into its own file
export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* loop of defined recipe data props from the parent component */}
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>Body: {post.body} </p>
            <img src={post.image_url} alt="blog post pics" />
          </div>
        ))}
      </div>
    </div>
  );
}