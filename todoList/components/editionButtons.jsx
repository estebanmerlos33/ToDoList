export const EditionButtons = (props) => {
  return props.editables.includes(props.id) && <p>Edition Buttons</p>;
};
