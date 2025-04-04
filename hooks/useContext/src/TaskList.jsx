import Task from "./Task";
import { useTasks } from "./context/TasksContext";

export default function TaskList() {
    const task = useTasks();

    return (
        <ul>
            {task.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}
