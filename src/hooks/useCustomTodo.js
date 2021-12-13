import { useContext } from "react";
import { TodoContext } from "../components/provider/TodoProvider";

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
  };

  // Deleteボタン押下時の処理
  const handleDeleteTask = (deleteTask) => {
    const deletedTodos = [...todos].filter((todo) => todo.item !== deleteTask);
    setTodo(deletedTodos);
  };
  return { handleCompleteTask, handleDeleteTask };
};

export default useCustomTodo;
