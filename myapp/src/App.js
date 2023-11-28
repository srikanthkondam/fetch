// import logo from './logo.svg';
import './App.css';
import Read from "./Read"
import Post from "./Post"
import {Link ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <Link to="/post">Post</Link>
       <Routes>
       <Route path="/" element={<Read/>}/>
       <Route path="/post" element={<Post/>}/>
       </Routes>
    </div>
  );
}

export default App;
