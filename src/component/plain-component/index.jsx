import Logger from "../logger-component";
function PlainComponent(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">普通组件</h3>
      </div>
      <div className="card-body">
        <p>这个组件被looger包装一次</p>
      </div>
    </div>
  );
}

export default Logger(PlainComponent);
