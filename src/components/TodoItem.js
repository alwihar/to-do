import React from "react";

const TodoItem = props => {
    return (
        <div className='item'>{props.children}</div>
    )
};

export default TodoItem;
