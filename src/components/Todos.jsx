import { useContext, useEffect } from "react";
import { TodoContext } from "./provider/TodoProvider";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getPersistentTodos } from "./LocalStorage";

const Todos = function () {
  const { todos, setTodo } = useContext(TodoContext);

  useEffect(() => {
    setTodo(getPersistentTodos());
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      <TodoInput />
      <div id="table">
        <h2>やることリスト</h2>
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
