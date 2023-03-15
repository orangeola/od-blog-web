import Header from "./components/Header"
import Footer from "./components/Footer"
import Post from "./components/Post"
import Home from "./components/Home"
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Hero'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
