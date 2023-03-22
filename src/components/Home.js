import '../styles/Home.css'
import React, {useState, useEffect} from 'react';

function Home(props) {
  let [posts, setPosts] = useState(null);

  function limitLengthText(input){
    let desiredLength = 100;
    if(input.length > desiredLength){
      return input.slice(0, desiredLength-input.length) + "...";
    }
    return input;
  }

  function limitLengthTitle(input){
    let desiredLength = 200;
    if(input.length > desiredLength){
      return input.slice(0, desiredLength-input.length) + "...";
    }
    return input;
  }

  useEffect(() => {
    fetch('https://od-blog-api.orangeola.repl.co/post')
   .then(response => response.json())
   .then(data => {
    setPosts(data.post)})
  }, []);

  return (
    <div className="Home">
      <h3>List of Posts:</h3>
      <div className="homePost">
      {posts && posts.map((task) => {
        return <div key={task._id}>
          <a href={'/post/' + task._id}>{limitLengthTitle(task.title)}</a><br></br>
          {limitLengthText(task.text)}<br></br>
          <i>{props.date(task.date)}</i><br></br>
          <hr></hr>
          </div>;
      })}
    </div>
    </div>
  );
}

export default Home;
