const SingleInput = (prop) => {
  const props = prop.InputArray;
  return (<div className="form-group">
    <label className="form-label" htmlFor={props.id}>
      {props.id}
    </label>
    <input
      className="form-control mt-2"
      name={props.name}
      type={props.type}
      value={props.val}
      onChange={props.controlFunc}
    />
  </div>)
};
export default SingleInput;
