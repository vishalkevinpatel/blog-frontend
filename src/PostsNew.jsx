// creating new posts moved into own file
export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" placeholder="  new blog post title" />
        </div>
        <div>
          Body: <input type="text" placeholder="       new blog post" />
        </div>
        <div>
          Image: <input type="text" placeholder="          image url" />
        </div>
        <p></p>
        <button type="submit">Post your blog post</button>
      </form>
    </div>
  );
}
