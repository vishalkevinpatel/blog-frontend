export function PostsShow(props) {
  return (
    <div>
      <h2 className="text-center">Title {props.post.title} </h2>
      <p></p>
      <p className="text-center">{props.post.body}</p>
      <div className="d-flex justify-content-center">
        <img src={props.post.image} alt="idk bro" className="img-thumbnail" />
      </div>
      <p></p>
      <p>hey want to know a secret? the id is {props.post.id}</p>
    </div>
  );
}
