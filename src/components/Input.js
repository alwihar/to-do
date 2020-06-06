import React from 'react';

const Input = props => {

    return (
        <div>
            <div className="title">{props.title}</div>
            <form className='input' onSubmit={props.handleSubmit}>
                <input type="text" name="name" value={props.value} onChange={props.handleChange}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
};

export default Input;
