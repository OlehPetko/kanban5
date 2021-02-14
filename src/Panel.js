import './App.css';
import Task from "./Task";

function Panel(props) {

    return (
        <div className="App">
            <h3>
                {props.el}
            </h3>
            {props.tasks
                .filter(el => el.status === props.el)
                .map(el => <Task el={el} key={el.id} deleteTsk={props.deleteTask}
                                 upTask={props.upTask} downTask={props.downTask}
                                 updateDone={props.updateDone} isEdit={props.isEdit} setIsEdit={props.setIsEdit}
                                 inputTaskEdit={props.inputTaskEdit} setInputTaskEdit={props.setInputTaskEdit} editInput={props.editInput}

                />)}

        </div>
    );
}

export default Panel;
