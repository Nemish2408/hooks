import { useState } from "react";
import { useTasksDispatch } from "./context/TasksContext";

export default function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();

    function handleToggleDone() {
        dispatch({
            type: 'changed',
            task: { ...task, done: !task.done }
        });
    }

    function handleDelete() {
        dispatch({
            type: 'deleted',
            id: task.id
        });
    }

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e =>
                        dispatch({
                            type: 'changed',
                            task: { ...task, text: e.target.value }
                        })
                    }
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                    {task.text}
                </span>

                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <div>
            <input type="checkbox" checked={task.done} onChange={handleToggleDone} />
            {taskContent}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
