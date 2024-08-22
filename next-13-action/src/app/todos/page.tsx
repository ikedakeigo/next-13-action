// import '../../styles/globals.css';
import { revalidatePath } from 'next/cache';
import  prisma  from '../../../lib/prisma';

// import { useTransition } from 'react';
import DoneTodo from './doneTodo';
import { addTodo, deleteTodo, doneTodo } from './actions';
import AddTodo from './addTodo';
import Uplorder from '../public/uplorder';

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

const Page = async () => {
  const todos = await prisma.todo.findMany();


  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo: Todo) => (
          <li
          key={todo.id}
          className={`flex items-center space-x-2 ${todo.isCompleted ? 'line-through' : ''}`}
          >
            <DoneTodo
            id={todo.id}
            isCompleted={todo.isCompleted}
            doneTodo={doneTodo}
            />
            <span>{todo.name}</span>
            <form>
              <input type="hidden" name='id' value={todo.id} />
              <button className='bg-red-500 px-2 py-1 rounded-lg text-sm text-white'
              formAction={deleteTodo}>
                削除
              </button>
            </form>
          </li>
        ))}
      </ul>

        <AddTodo />
        <Uplorder />
    </div>
  )
}

export default Page;
