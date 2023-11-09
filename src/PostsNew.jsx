// creating new posts moved into own file
export function PostsNew() {
  return (
    <div id="posts-new">
      <h1 className="d-flex justify-content-center">New post</h1>
      <form>
        <div className="d-flex justify-content-center">
          Title: <input type="text" placeholder="  new blog post title" />
        </div>
        <div className="d-flex justify-content-center">
          Body: <input type="text" placeholder="       new blog post" />
        </div>
        <div className="d-flex justify-content-center">
          Image: <input type="text" placeholder="          image url" />
        </div>
        <p></p>
        <div className="d-flex justify-content-center">
          <button type="submit">Post your blog post</button>
        </div>
      </form>
    </div>
  );
}
