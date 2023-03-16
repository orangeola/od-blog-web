import '../styles/CommentForm.css'
import { useParams, } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function CommentForm(params) {
  const {id} = useParams();
  let [author, setAuthor] = useState(null);
  let [text, setText] = useState(null);
  let [error, setError] = useState(null);

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
      setError([{msg: "Message created successfully!", param: "Success"}]);
      params.setSuccess(true);
    } else {
      console.log("Some error occured", resJson.errors);
      setError(resJson.errors);
    }
  }
  catch(err){
    console.log("err: ", err);
  }
  };

  useEffect(()=>{
    document.getElementsByName("author")[0].value = "";
    setAuthor("");
    document.getElementsByName("text")[0].value = "";
    setText("");
    params.setSuccess(false);
  }, [params.success])

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
        <div>
          {error && error.map((err) => {
            return <div key={err.param}>
              <li>{err.msg}</li>
            </div>
          })}
        </div>
      </form>
      <h3>Comments</h3>
    </div>
  );
}

export default CommentForm;
