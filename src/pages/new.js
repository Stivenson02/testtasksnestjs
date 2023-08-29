import Layaout from "@/components/Layaout"
import { useTasks } from "@/context/taskContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"

const TaskFormPage = () => {

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const {createTask, updateTask, tasks} = useTasks(); 
    const {push, query} = useRouter();

    const handleChange = (e) => {
        const {name, value} = e.target
        setTask({...task, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!query.id){
            createTask(task.title, task.description);
        }else{
            updateTask(query.id, task)
        }
        push("/");
    }

    useEffect(() => {
        if (query.id){
            const taskFound = tasks.find(task => task.id === query.id)
            setTask({title: taskFound.title, description: taskFound.description})
        }
    }, [])

  return (
    <Layaout>
        <div className='flex justify-center items-center h-full'>
            <form onSubmit={handleSubmit} className='bg-gray-700 p-10 h-2/4'>
                <h1 className='text-3xl mb-7'>{query.id ? 'Update a Task': 'Create a Task'}</h1>
                <input type="text" placeholder='Write a title' name='title'
                className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5'
                onChange={handleChange}
                value={task.title}
                />
                <textarea rows="2" placeholder='Write a description' name='description'
                className='bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5'
                onChange={handleChange}
                value={task.description}
                ></textarea>
                <button className='bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30' 
                disabled={!task.title}>
                    Save
                </button>
            </form> 
        </div>  
    </Layaout>
    )
}

export default TaskFormPage
