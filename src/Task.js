import './App.css';


const style = {
    'textDecoration': 'line-through'
}


function Task(props) {
    const done = props.el.done ? style : {}


    return (
        <div className="App" >
            <span style={done}>
            {props.el.name}
            </span>
            <button onClick={() => props.updateDone(props.el.id)}>done</button>
            <button onClick={() => props.deleteTsk(props.el.id)}>delete</button>
            {props.el.status !== 'todo' && <button onClick={() => props.upTask(props.el.id)}>up</button>}
            {props.el.status !== 'done' && <button onClick={() => props.downTask(props.el.id)}>down</button>}



            <div>
                {props.isEdit && <input value={props.inputTaskEdit} onChange={(e) => props.setInputTaskEdit(e.target.value)}/>}
                {props.isEdit && <button onClick={() => props.editInput(props.el.id, props.inputTaskEdit)}>save</button>}
                {props.isEdit && <button onClick={() => props.setIsEdit(!props.isEdit)}>cancel</button>}
                {!props.isEdit && <button onClick={() => props.setIsEdit(!props.isEdit)}>edit</button>}
                priority: {props.el.priority}
            </div>

        </div>
    );
}

export default Task;
