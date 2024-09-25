import { NavLink, Outlet } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <Outlet></Outlet>
        </div>

        <div className="col-md-3">
          <div class="list-group">
            <NavLink
              className="nav-link active"
              aria-current="dashboard"
              to="/manage/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className="nav-link active"
              aria-current="post management"
              to="/manage/post-mng"
            >
              Post Manage
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
