import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodo = () => {
  //consumer
  const sharedObj = useContext(TodoContext);
  return sharedObj;
};
