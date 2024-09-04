import NavBar from './component/nav-bar';
import PostList from './component/post-list';
import Footer from './component/footer';
import WritePost from  './component/write-post';
import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App" data-bs-theme="dark">
      <NavBar></NavBar>
      <div className='container main-container'>
        <Routes>
          <Route path='/' element={<PostList></PostList>}></Route>
          <Route path='/post-list' element={<PostList></PostList>}></Route>
          <Route path='/write-post' element={<WritePost></WritePost>}></Route>
        </Routes>
        <PostList></PostList>
      </div>
      <Footer></Footer>
      
    </div>
    </Router>
  );

}

export default App;
