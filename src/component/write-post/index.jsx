import { useState } from "react";
import postDetail from "../post-detail";

export default (props) => {
  const [postDetail, setPostDetail] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostDetail({
      ...postDetail,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
  };

  const validateForm = () => {
    let isValid = true;
    const { title, content } = postDetail;

    if (title.length < 2 || title.length > 32) {
      isValid = false;
    }

    if (content.length < 2 || content.length > 140) {
      isValid = false;
    }
    console.log(title, content);
    return isValid;
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <form noValidate onSubmit={handleSubmit}>
            <div class="mb-3">
              <label htmlFor="title" className="form-lael">
                Title:
              </label>
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Title"
                value={postDetail.title}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label className="form-label">Content:</label>
              <textarea
                name="content"
                className="form-control"
                rows="10"
                placeholder="请输入内容"
                value={postDetail.content}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={validateForm}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
