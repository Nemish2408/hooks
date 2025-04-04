import {useState} from "react";
import { useTasksDispatch } from "./context/TasksContext";

let nextId = 3;

export default function AddTasks() {
    const[text, setText] = useState('');
    const dispatch = useTasksDispatch();


    function handleAdd() {
        if (text.trim() === '') return;

        dispatch({
            type: 'added',
            id: nextId++,
            text: text
        })
        setText('');
    }

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Add New Tasks"/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}