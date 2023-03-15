import React, {useState, useEffect} from 'react';

function Home() {
  let [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/post')
   .then(response => response.json())
   .then(data => {
    console.log(data.post);
    setPosts(data.post)})
  }, []);

  return (
    <div className="Home">
      <h3>List of Posts:</h3>
      <div>
      {posts && posts.map((task) => {
        return <div key={task._id}>
          <a href={'/post/' + task._id}>{task.title}</a><br></br>
          {task.text}<br></br>
          {task.date}<br></br>
          <hr></hr>
          </div>;
      })}
    </div>
    </div>
  );
}

export default Home;
