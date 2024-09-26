import NavBar from "./component/nav-bar";
import PostList from "./component/post-list";
import Footer from "./component/footer";
import WritePost from "./component/write-post";
import PostDetail from "./component/post-detail";
import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Greeting from "./greeting";
import AwsCard from "./component/aws-card";
import ManageMain from "./component/manage/manage-main";
import Dashboard from "./component/manage/dashboard";
import PostManage from "./component/manage/post-manage";
import PlainComponent from "./component/plain-component";
function App() {
  return (
    <Router>
      <div className="App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div className="container main-container">
          <Routes>
            <Route path="/" element={<PostList></PostList>}></Route>
            <Route path="/post-list" element={<PostList></PostList>}></Route>
            <Route
              path="/post-detail/:id"
              element={<PostDetail></PostDetail>}
            ></Route>
            <Route
              path="/high-order"
              element={<PlainComponent></PlainComponent>}
            ></Route>

            <Route path="/write-post" element={<WritePost></WritePost>}></Route>
            <Route path="/manage" element={<ManageMain></ManageMain>}>
              <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
              <Route
                path="post-mng"
                element={<PostManage></PostManage>}
              ></Route>
            </Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
