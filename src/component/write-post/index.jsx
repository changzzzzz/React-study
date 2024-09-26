import { useState } from "react";
import postDetail from "../post-detail";
import { type } from "@testing-library/user-event/dist/type";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

export default (props) => {
  const [errors, setErrors] = useState({});
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

    // const form = e.target;

    // const formData = new FormData(form);

    // const data = Object.fromEntries(formData.entries());

    const isValid = validate(postDetail);
    setErrors({});
    if (!isValid) {
      const fieldErrors = {};
      validate?.errors.forEach((error) => {
        const field = error.instancePath.substring(1);
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      console.log(fieldErrors);
      return;
    }
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

  const schema = {
    type: "object",
    properties: {
      title: {
        type: "string",
        minLength: 2,
        maxLength: 32,
      },
      content: {
        type: "string",
        minLength: 2,
        maxLength: 140,
      },
    },
  };

  const ajv = new Ajv({ allErrors: true });
  ajvErrors(ajv);
  const validate = ajv.compile(schema);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
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
              {errors.title && (
                <span className="text-danger">{errors.title}</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Content:</label>
              <textarea
                name="content"
                className="form-control"
                rows="10"
                placeholder="请输入内容"
                value={postDetail.content}
                onChange={handleChange}
              ></textarea>
              {errors.content && (
                <span className="text-danger">{errors.content}</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
