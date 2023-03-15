import { useParams } from "react-router-dom";

function Post() {
  const {id} = useParams();
  return (
    <div className="Post">
      <h1>Post: {id}</h1>
    </div>
  );
}

export default Post;
