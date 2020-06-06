import React, {useState} from 'react';
import Input from "./Input";
import TodoItem from "./TodoItem";

const ToDoList = props => {

    const [value, setValue] = useState('')
    const [list, setList] = useState([]);


    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleSubmit = (e) => {
        setList(list => [...list, value]);
        e.preventDefault();
        setValue('');
    };

    return (
        <div className="todo">
            <Input
                title='To Do List'
                value={value}
                list={list}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <div className="list">
                {list.map((listItem, index) =>
                    <TodoItem key={index}>{listItem}</TodoItem>
                )}
            </div>
        </div>
    )
};

export default ToDoList;
