import { useContext } from "react";
import { TodoContext } from "./provider/TodoProvider";
import { setPersistentTodos } from "./LocalStorage";

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
            todo.isCompleted === true
              ? { textDecorationLine: "line-through", color: "#c0c0c0" }
              : {}
          }
        >
          {todo.item}
          <button
            className="task_button"
            type="button"
            onClick={() => handleDeleteTask(todo.item)}
          >
            Delete
          </button>
          <button
            className="task_button"
            type="button"
            onClick={() => handleCompleteTask(todo)}
          >
            {todo.isCompleted === false ? "Complete" : "Restore"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
