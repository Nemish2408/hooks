import AddTasks from "./AddTasks";
import TasksProvider from "./context/TasksContext.jsx";
import TaskList from "./TaskList";

function App() {
  return (
    <>
      <TasksProvider>
        <h1> Tasks: </h1>
        <AddTasks />
        <TaskList />
      </TasksProvider>
    </>
  );
}

export default App;
