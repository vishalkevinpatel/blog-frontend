export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h2 className="text-center">Title {props.post.title} </h2>
      <p></p>
      <p className="text-center">{props.post.body}</p>
      <div className="d-flex justify-content-center">
        <img src={props.post.image} alt="idk bro" className="img-thumbnail" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          Title: <input name="title" type="text" defaultValue={props.post.title} />
        </div>
        <div className="d-flex justify-content-center">
          Body: <input name="body" type="text" defaultValue={props.post.body} />
        </div>
        <div className="d-flex justify-content-center">
          Image: <input name="image" type="text" defaultValue={props.post.image_url} />
        </div>
        <p></p>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">
            Update Blog
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center p-2">
        <button onClick={handleClick} className="btn btn-secondary" data-bs-dismiss="modal">
          Delete post
        </button>
      </div>
      <p></p>
      <div className="d-flex justify-content-center p-2">
        <p>hey want to know a secret? the id is {props.post.id}</p>
      </div>
    </div>
  );
}
