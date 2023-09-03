import './item.css'
const Item = (props) => {
  return (
    <div>
      {props.item.value}
      <button onClick ={props.editItem}>Edit</button>
      <button onClick = {props.removeItem}>Remove</button>
    </div>
  );
};
  
  export default Item;