import { useParams, } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import CommentForm from './CommentForm'

function Comment(props) {
  const {id} = useParams();
  let [comments, setComments] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}/comment`)
   .then(response => response.json())
   .then(data => {
    console.log(data.comment)
    setComments(data.comment);
    })
  }, []);

  return (
    <div className="Comment">
      <div>
        <CommentForm />
        {comments && comments.map((task) => {
          return <div key={task._id}>
            <i>{task.author}</i><br></br>
            <i>{task.date}</i><br></br>
            {task.text}<br></br>
            <hr></hr>
            </div>;
        })}
    </div>
    </div>
  );
}

export default Comment;
