import React from 'react'
import { useCreateTaskMutation } from '../api/apiSlice';

function TaskForm() {

    const [createTask] = useCreateTaskMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const description = e.target.elements.description.value.trim();
        const completed = e.target.elements.completed.checked;
        
        createTask({
            name,
            description,
            completed
        })
       formulario.reset()

        
    }

  return (
  <>
    <h1 className='text-cyan-500 text-center text-xl font-extrabold my-2 py-2'>Seguimiento Retiro Materiales</h1>
   <form id="formulario" onSubmit={ handleSubmit } className="bg-zinc-700 max-w-sm p-4 rounded-md"> 
    <input type="text" name='name' className="w-full p-2 rounded-md bg-zinc-600 mb-2" placeholder='OC'/>
    <input type="text" name='description'className="w-full p-2 rounded-md bg-zinc-600 mb-2" placeholder='Descripcion'/>
    <button className="bg-indigo-600 px-4 py-1 rounded-sm mx-4">Agregar OC</button>
    <label className="px-3">Retirado</label>
    <input type="checkbox" name='completed' className="p-2 rounded-md bg-zinc-600"/> 
   </form>
  </>
   
  )
}

export default TaskForm
