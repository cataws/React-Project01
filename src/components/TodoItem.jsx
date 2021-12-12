import { useContext } from "react";
import { TodoContext } from "./provider/TodoProvider";
import { setPersistentTodos } from "../utils/index";
import Button from "./Button";

const TodoItem = function () {
  const { todos, setTodo } = useContext(TodoContext);

  // Completeボタン押下時の処理(完了⇔未完了のトグル)
  const handleCompleteTask = (completeTask) => {
    const completedTodos = [...todos].map((todo) => {
      if (todo.item === completeTask.item) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodo(completedTodos);
    setPersistentTodos(completedTodos);
  };

  // Deleteボタン押下時の処理
  const handleDeleteTask = (deleteTask) => {
    const deletedTodos = [...todos].filter((todo) => todo.item !== deleteTask);
    setTodo(deletedTodos);
    setPersistentTodos(deletedTodos);
  };

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
