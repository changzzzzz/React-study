import "./index.scss";
import { useState } from "react";
import postListMock from "../mock-data/mock.json";
import { useNavigate } from "react-router-dom";

export default props => {
    const [postList,setPostList] = useState([...postListMock]);
    const navigate = useNavigate();
    return (
        <div className="post-list-container">
            {
                postList.map(
                    item => {
                        return (
                            <div className="card post-item" style={{width: "18rem"}} key={item.id}>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#36c2b5"></rect>
                                    {/* <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Course</text> */}
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">{item.postTitle}</h5>
                                    <p className="card-text"> {item.postContent}</p>
                                    {item.studied ? (
                                        <p>已学习</p>
                                    ):(
                                        <a href="#" className="btn btn-primary" onClick={
                                        () => {
                                           navigate(`/post-detail/${item.id}`);
                                        }
                                    }>未学习</a>
                                    )
                                    
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
            



        </div>
    )
}