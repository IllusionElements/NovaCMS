const Checkbox = ({ id, name, title }) => {
  const NAME = name || false;
  return (
    <div className={ "custom-control custom-checkbox" }>
    <input
      id = { id }
      className={ "custom-control-input mt-2" }
      name = { NAME }
      type={ 'checkbox' } />
   <label className={ "custom-control-label" } htmlFor={ id }>
      { title }
    </label>
  </div>)
};

export default Checkbox;
