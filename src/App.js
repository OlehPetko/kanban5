import './App.css';
import Input from "./Input";
import {useState} from "react";
import Panel from "./Panel";
import Bin from "./Bin";


const statuses = ['todo', 'progress', 'review', 'done']
const initialState = [
        {id: Math.random(), name: 'Love', status: statuses[0], priority: 1, done: false},
    {id: Math.random(), name: 'I love you', status: statuses[1], priority: 2, done: false},
    {id: Math.random(), name: 'I dont love', status: statuses[2], priority: 1, done: false},
    {id: Math.random(), name: 'I dident love', status: statuses[3], priority: 2, done: false}
]

function App() {
    const [tasks, setTasks] = useState(initialState)
    const [inputTaskEdit, setInputTaskEdit] = useState('')
    const [newInputTask, setNewTask] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const onChange = (e) => {
        setNewTask(e.target.value)
    }
    const addNewTasks = () => {
        const newTask = {id: Math.random(), name: newInputTask, status: statuses[0], priority: 1, done: false}
        const newList = [...tasks, newTask]
        setTasks(newList)
        setNewTask('')
    }
    const deleteTask = (id) => {
        const newTask = tasks.filter(el => el.id !== id)
        setTasks(newTask)
    }
    const upTask = (id) => {
        const updateStatus = tasks.map(el => el.id === id ? {...el, status: next(el.status)} : el)
        setTasks(updateStatus)
    }
    const downTask = (id) => {
        const updateStatus = tasks.map(el => el.id === id ? {...el, status: previos(el.status)} : el)
        setTasks(updateStatus)
    }
    const next = (status) => {
        return statuses[statuses.indexOf(status) - 1]
    }
    const previos = (status) => {
        return statuses[statuses.indexOf(status) + 1]
    }
    const updateDone = (id) => {
        const newTask = tasks.map(el => {
            if (id === el.id) {
                return {...el, done: !el.done}
            }
            return el
        })
        setTasks(newTask)
    }
    const editInput = (id, newName) => {
        const newEditTask = tasks.map(el => {
            if (el.id === id){
                el.name = newName
            }
            return  el
        })
        setTasks(newEditTask)
        setInputTaskEdit('')
        setIsEdit(false)
            }


    return (
        <div className="App">
            <Input newInputTask={newInputTask} onChange={onChange} addNewTask={addNewTasks}/>
            {statuses.map(el =>
                <div key={el}>
                    <Panel el={el} tasks={tasks} deleteTask={deleteTask} upTask={upTask} downTask={downTask}
                           newInputTask={newInputTask} updateDone={updateDone} isEdit={isEdit} setIsEdit={setIsEdit}
                           editInput={editInput}   inputTaskEdit={inputTaskEdit}   setInputTaskEdit={setInputTaskEdit}                 />
                </div>
            )}
            <hr/>
            <Bin/>
        </div>
    );
}

export default App;
