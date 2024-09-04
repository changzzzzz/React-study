import NavBar from './component/nav-bar';
import PostList from './component/post-list';
import Footer from './component/footer';
import './App.scss';



function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <NavBar></NavBar>
      <div className='container main-container'>
        <PostList></PostList>
      </div>
      <Footer></Footer>
    </div>
  );

}

export default App;
