'use client';

import { useTransition } from "react";
import { doneTodo } from "./actions";

const DoneTodo = ({isCompleted, id } : { isCompleted: boolean, id: number}) => {
  let[isPending, startTransition] = useTransition();


  return (
    <input
    type="checkbox"
    onChange={() => startTransition(() => doneTodo())}
    checked={isCompleted}
    />
  )
}

export default DoneTodo;
