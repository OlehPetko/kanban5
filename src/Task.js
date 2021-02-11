import './App.css';
import {useState} from "react";

const style = {
    'textDecoration': 'line-through'
}

function Task(props) {
    const done = props.el.done ? style : {}

    return (
        <div className="App" style={done}>
            {props.el.name}
            <button onClick={() => props.updateDone(props.el.id)}>done</button>
            <button onClick={() => props.deleteTsk(props.el.id)}>delete</button>
            {props.el.status !== 'todo' && <button onClick={() => props.upTask(props.el.id)}>up</button>}
            {props.el.status !== 'done' && <button onClick={() => props.downTask(props.el.id)}>down</button>}
            {props.isEdit && <input type="text"/>}
            {props.isEdit && <button>save</button>}
            {props.isEdit && <button onClick={() => props.setIsEdit(!props.isEdit)}>cancel</button> }
            {!props.isEdit &&  <button onClick={() => props.setIsEdit(!props.isEdit)}>edit</button>}


            <div>
                <button>
                    priority: {props.el.priority}
                </button>
            </div>

        </div>
    );
}

export default Task;
