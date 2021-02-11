import './App.css';

function Input(props) {



  return (
    <div className="App">
      <input type="text" value={props.newInputTask} onChange={props.onChange}/>
      <button onClick={props.addNewTask}>add new task</button>
    </div>
  );
}

export default Input;
