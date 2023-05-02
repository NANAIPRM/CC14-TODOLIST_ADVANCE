import styles from "./TodoLists.module.scss";
import { useTodo } from "../../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export function TodoLists() {
  // const sharedObj = useContext(TodoContext);
  // const todosFilter = sharedObj.todosFilter;
  const { todosFilter } = useTodo();
  return (
    <ul className={styles.todoList}>
      {todosFilter?.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
}
