export default (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <form noValidate>
            <div class="mb-3">
              <label htmlFor="title" className="form-lael">
                Title
              </label>
              <input type="text" className="form-control" />
            </div>
            <div class="mb-3">
              <label className="form-label">content</label>
              <textarea className="form-control" rows="10"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
