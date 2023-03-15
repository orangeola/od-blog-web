import '../styles/CommentForm.css'
import { useParams, } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function CommentForm() {
  const {id} = useParams();
  let [author, setAuthor] = useState(null);
  let [text, setText] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    let res = await fetch(`http://localhost:5000/post/${id}/comment`, {
       method: 'POST',
       body: JSON.stringify({
          author: author,
          text: text,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
    let resJson = await res.json();
    if (res.status === 200) {
      console.log("Message created successfully");
    } else {
      console.log("Some error occured", resJson.errors);
    }
  }
  catch(err){
    console.log("err: ", err);
  }
  };

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <p><i>Submit a comment!</i></p>
        <label>
          Name:
          <br></br>
          <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/>
        </label>
        <label>
          Comment:
          <br></br>
          <textarea type="text" name="text" onChange={(e) => setText(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>Comments</h3>
    </div>
  );
}

export default CommentForm;
