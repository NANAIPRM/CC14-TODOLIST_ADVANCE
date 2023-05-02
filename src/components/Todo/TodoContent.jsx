import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoHeader } from "./TodoHeader";
import { AddTodo } from "./AddTodo";
import { TodoLists } from "./TodoLists";
// import mockTodos from '../../data/todo.json'

export function TodoContent() {
  // # HOOK-AREA : State,Effect,Context
  const sharedObj = useContext(TodoContext);
  console.log("TodoContent", sharedObj);

  return (
    <main className="content">
      <TodoHeader />
      <AddTodo />
      <TodoLists />
    </main>
  );
}
