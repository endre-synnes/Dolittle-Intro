import React from "react";

const Todo = (props) => (
    
    <div className="todo-grid">
        <h3>{props.text}</h3>
        <p>Category: {props.category}</p>
        <button className="delete-btn" onClick={() => props.delete(props.id)}>X</button>
    </div>
    
)

export default Todo