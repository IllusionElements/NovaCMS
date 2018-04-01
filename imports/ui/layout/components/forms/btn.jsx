const BTN = (props) => {
  const { type, title, ...classProps } = props.button;
  console.log(...type);
  return (<button
    type={ type } 
    className={`btn btn-${classProps.size} btn-${ classProps.color || "default" } ${classProps.margin || "mt-3" }`} >
    { title }
  </button>)
};

export default BTN;
