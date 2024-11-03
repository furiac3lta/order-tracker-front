import { useState } from "react";
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

function TaskList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [active, setActive] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
     
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 py-4 ">
        {tasks.map((task) => (
          <div
            className={` rounded-md ${
              !task.completed ? "bg-zinc-700" : "bg-pink-600"
            }`}
            key={task.id}
          >
            <header className="flex justify-between"></header>
            <p
              className={` text-xl font-medium my-2 mx-3 ${
                !task.completed ? "text-slate-400" : "text-white-600"
              }`}
            >
              {task.name}
            </p>

            <p
              className={` text-md mx-3 ${
                !task.completed ? "text-slate-400" : "text-white-600"
              }`}
            >
              {task.description}
            </p>

            <button
              className={`  px-2 py-1 text-md rounded-md mx-2 my-4 ${
                !task.completed
                  ? "text-white-400 bg-pink-500 "
                  : "bg-slate-800  text-white-600"
              }`}
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>
            <div className="py-3 bg-gray-900 rounded-b-md">
              <label
                className={` text-md ${
                  !task.completed ? "text-slate-400" : "text-white-600"
                }`}
                htmlFor={task.id}
              >
                <span className=" text-md mx-2 ">Material Retirado</span>
                {/* <input
                className="accent-black "
                type="checkbox"
                id={task.id}
                checked={task.completed}
                onChange={(e) => {
                  updateTask({ ...task, completed: e.target.checked });
                }}
              /> */}
              </label>
              <label className="relative inline-flex items-center cursor-pointer mx-5 align-top">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  id={task.id}
                  checked={task.completed}
                  onChange={(e) => {
                    updateTask({ ...task, completed: e.target.checked });
                  }}
                />
                <div
                  className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300
   dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"
                ></div>                
                  {task.completed
                  ? <span className="ml-3 text-md font-medium text-gray-300">SI</span>
                  : <span className="ml-3 text-md font-medium text-gray-300">NO</span>
                  }
                
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TaskList;
