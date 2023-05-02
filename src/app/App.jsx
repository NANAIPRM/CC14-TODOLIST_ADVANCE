import "./App.scss";
import { useState, useEffect } from "react";
import * as TodoAPIServices from "../services/todoServices";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { TodoContent } from "../components/Todo/TodoContent";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodoFilter] = useState([]);

  useEffect(() => {
    // FN-BODY(use Effect) : Run AFTER EVERY RENDER(MOUNT+RERENDER)
    async function fetchAllTodo() {
      try {
        // let response = await axios({
        //     method: 'get',
        //     url: 'http://localhost:8080/todos',
        // });

        // #1 : Sync with External Service
        const response = await TodoAPIServices.getAllTodo();

        // #2 : Sync with Internal State
        setTodos(response.data.todos);
        setTodoFilter(response.data.todos);
      } catch (error) {
        // #3 Error handler
        console.log(error.response.status);
      }
    }
    fetchAllTodo();
    // FN-RETURN(CleanUp Effect) : Run BEFORE RERENDER,BEFORE UNMOUNT
    return () => console.log("Clean Up");
  }, []);

  return (
    <div className="container">
      <Header />
      <SideBar />
      <TodoContent
        todos={todosFilter}
        setTodos={setTodos}
        setTodoFilter={setTodoFilter}
      />
    </div>
  );
}

export default App;
