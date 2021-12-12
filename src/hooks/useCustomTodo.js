import { useContext } from "react";
import { TodoContext } from "../components/provider/TodoProvider";
import { setPersistentTodos } from "../utils/index";

const useCustomTodo = function () {
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
  return { handleCompleteTask, handleDeleteTask };
};

export default useCustomTodo;
