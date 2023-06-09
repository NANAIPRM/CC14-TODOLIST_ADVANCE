import MyAxios from "./axiosConfig";

export const getAllTodo = async () => await MyAxios.get("/todos");

export const createTodo = async (newTodoObj) =>
  await MyAxios.post("/todos", newTodoObj);

export const updateTodo = async (updateTodoObj) =>
  await MyAxios.put(`/todos/${updateTodoObj.id}`, updateTodoObj);

export const deleteTodo = async (todoId) =>
  await MyAxios.delete(`todos/${todoId}`);

// Named Export
// export {getAllTodo:getAllTodo, createTodo : createTodo, updateTodo : updateTodo ,deleteTodo:deleteTodo}

// const TodoAPIServices = {getAllTodo:getAllTodo, createTodo : createTodo, updateTodo : updateTodo ,deleteTodo:deleteTodo}
