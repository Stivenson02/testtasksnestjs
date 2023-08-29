import { useTasks } from '@/context/taskContext';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AiOutlinePlus} from 'react-icons/ai'

const Layaout = ({children}) => {

    const router = useRouter();
    const {tasks} = useTasks()

  return (
    <div className='h-screen bg-gray-900 text-white'>
        <header className='flex items-center bg-gray-800 px-28 py-5'>
            <Link href="/">
                <h1 className='font-black taxt-lg'>Task App</h1>
            </Link>
            <span className='ml-2 text-gray-400 font-bold'>
                {tasks.length} tareas    
            </span> 

            <div className='flex-grow text-right'>
                <button className='bg-green-500 hover:bg-green-700 px-2 py-2 font-bold rounded-sm inline-flex 
                items-center' onClick={()=> router.push('/new')}>
                    <AiOutlinePlus className='mr-2'/>
                    Add Task
                </button>
            </div>
        </header>
        <main className='px-28 py-10'>
            {children}
        </main>
        
    </div>
  )
}

export default Layaout
