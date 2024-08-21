'use server';

import  prisma  from '../../../lib/prisma';
import { revalidatePath } from "next/cache";

export async function doneTodo(isCompleted: boolean, id: number) {
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
