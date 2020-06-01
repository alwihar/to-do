import React, {useState} from 'react';
import './App.scss';

import TodoItem from "./components/TodoItem";

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
      setList(list => [...list, value]);
      e.preventDefault();
  };

  return (
    <div className="todo">
      <div className="title">To Do List</div>
      <div className='input'>
          <input type="text" name="name" value={value} onChange={handleChange}/>
          <button onClick={handleSubmit}>Add</button>
      </div>
      <div className="list">
        {list.map(listItem =>
          <TodoItem key={listItem}>{listItem}</TodoItem>
        )}
      </div>
    </div>
  );
}

export default App;
