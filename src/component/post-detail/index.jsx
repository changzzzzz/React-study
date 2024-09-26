import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default (props) => {
  const [postDetail, setPostDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const tempStr = window.localStorage.getItem("post-detail");
    const tempObj = JSON.parse(tempStr);
    setPostDetail(tempObj);
  }, []);

  return (
    <>
      <h3>{postDetail.postTitle}</h3>
      <p>{postDetail.postContent}</p>
    </>
  );
};
