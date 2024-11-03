import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

function App() {
  return (
    <div className="bg-zinc-800 h-screen text-white">
      <div className="p-5 bg-zinc-800">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
