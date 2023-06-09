import '../styles/Comment.css'
import { useParams, } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import CommentForm from './CommentForm'

function Comment(props) {
  const {id} = useParams();
  let [comments, setComments] = useState(null);
  let [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`https://od-blog-api.orangeola.repl.co/post/${id}/comment`)
   .then(response => response.json())
   .then(data => {
    console.log(data.comment)
    setComments(data.comment);
    })
  }, [success]);

  return (
    <div className="Comment">
      <div>
        <CommentForm success={success} setSuccess={setSuccess}/>
        {comments && comments.map((task) => {
          return <div key={task._id}>
            <i>{task.author}</i><br></br>
            <i>{props.date(task.date)}</i><br></br>
            {task.text}<br></br>
            <hr></hr>
            </div>;
        })}
    </div>
    </div>
  );
}

export default Comment;
