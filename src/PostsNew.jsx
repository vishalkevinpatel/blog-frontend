// creating new posts moved into own file
import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    const params = new FormData(event.target);
    axios.post("http://localhost/3000/posts.json", params).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div id="posts-new">
      <h1 className="d-flex justify-content-center">New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          Title: <input name="title" type="text" placeholder="  new blog post title" />
        </div>
        <div className="d-flex justify-content-center">
          Body: <input name="body" type="text" placeholder="       new blog post" />
        </div>
        <div className="d-flex justify-content-center">
          Image: <input name="image" type="text" placeholder="          image url" />
        </div>
        <p></p>
        <div className="d-flex justify-content-center">
          <button type="submit">Post your blog post</button>
        </div>
      </form>
    </div>
  );
}
