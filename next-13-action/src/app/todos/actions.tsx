'use server';

import  prisma  from '../../../lib/prisma';
import { revalidatePath } from "next/cache";


export const addTodo = async (data: FormData) =>{
  const name = data.get('name') as string;
  await prisma.todo.create({ data: { name } });
  revalidatePath('/posts');
}

export const deleteTodo = async (data: FormData) =>{
  'use server';
  const id = data.get('id') as string;
  await prisma.todo.delete({
    where: {
      id : Number(id),
    }
  });
  revalidatePath('/posts');
}

export const doneTodo =  async (id: number, isCompleted: boolean)  => {
  await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: !isCompleted,
    },
  });
  revalidatePath('/posts');
}
