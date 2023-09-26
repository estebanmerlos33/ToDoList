

export const EditionButtons = (props) => {
    return props.editables.includes(props.btnid) && (
      <div>
        <button
          btnid={props.btnid}  
          onClick={() => props.confirm(props.id)}  
        >
          ✓
        </button>
        <button
          btnid={props.btnid}  
          onClick={() => props.cancel(props.id)}
        >
          ❌
        </button>
      </div>
    );
  };
  