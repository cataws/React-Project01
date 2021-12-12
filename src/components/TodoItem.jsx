import { useContext } from "react";
import { TodoContext } from "./provider/TodoProvider";
import useCustomTodo from "../hooks/useCustomTodo";
import Button from "./Button";

const TodoItem = function () {
  const { todos, setTodo } = useContext(TodoContext);
  const { handleCompleteTask, handleDeleteTask } = useCustomTodo();

  return (
    <ul id="task_list">
      {todos.map((todo) => (
        <li
          id={todo.item}
          key={todo.item}
          style={
            todo.isCompleted
              ? { textDecorationLine: "line-through", color: "#c0c0c0" }
              : {}
          }
        >
          {todo.item}
          <Button
            className="task_button"
            onClick={() => handleDeleteTask(todo.item)}
          >
            Delete
          </Button>
          <Button
            className="task_button"
            onClick={() => handleCompleteTask(todo)}
          >
            {!todo.isCompleted ? "Complete" : "Restore"}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
