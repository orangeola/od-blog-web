import Header from "./components/Header"
import Footer from "./components/Footer"
import Post from "./components/Post"
import Home from "./components/Home"
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'
const { DateTime } = require("luxon");

function App() {

  function formatDate(date){
    return DateTime.fromISO(date)
    .toLocaleString(DateTime.DATETIME_MED);
  }

  return (
    <div className="App">
      <Header />
      <div className='Hero'>
        <Routes>
          <Route exact path="/" element={<Home date={formatDate}/>} />
          <Route path="/post/:id" element={<Post date={formatDate}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
