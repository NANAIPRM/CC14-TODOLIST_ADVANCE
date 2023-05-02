import { TodoHeader } from "./TodoHeader";
import { AddTodo } from "./AddTodo";
import { TodoLists } from "./TodoLists";
// import mockTodos from '../../data/todo.json'

export function TodoContent() {
  return (
    <main className="content">
      <TodoHeader />
      <AddTodo />
      <TodoLists />
    </main>
  );
}
