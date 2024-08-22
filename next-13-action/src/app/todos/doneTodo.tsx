'use client';

import { useTransition } from "react";
import { doneTodo } from "./actions";

const DoneTodo = ({
  isCompleted,
  id,
  doneTodo
} : {
  isCompleted: boolean,
  id: number
  doneTodo: (id: number, isCompleted: boolean) =>
  Promise<void>
  }) => {
  // let[isPending, startTransition] = useTransition();

  return (
    <input
    type="checkbox"
    onChange={() => doneTodo(id, isCompleted)}
    checked={isCompleted}
    />
  )
}

export default DoneTodo;
