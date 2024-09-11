import { useState } from "react";
import { useParams } from "react-router-dom";

export default props => {
    const [PostDetail,setPostDetail] = useState({});
    let { id } = useParams();
    return (
       <>
        Post Detail, id:{id}
       </>
    )
}