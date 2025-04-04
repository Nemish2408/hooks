import { createContext, useContext, useReducer } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const initializeTasks = [
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Go for a Walk', done: false },
];

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, { id: action.id, text: action.text, done: false }];
        }
        case 'changed': {
            return tasks.map(task =>
                task.id === action.task.id ? action.task : task
            );
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}

export default function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initializeTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}
