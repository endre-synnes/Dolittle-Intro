import React from "react";

const Todo = (props) => (
    
    <div>
        <h3>{props.text}</h3>
        <p>{props.category}</p>
        <button onClick={() => props.delete(props.id)}>Delete</button>
    </div>
    
)

export default Todo