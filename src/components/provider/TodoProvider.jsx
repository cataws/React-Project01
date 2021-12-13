import { createContext, useState, useContext } from "react";
import { getPersistentTodos, setPersistentTodos } from "../../utils/index";

export const TodoContext = createContext({
  todos: getPersistentTodos(),
  setTodo: (token) => {},
});

const TodoProvider = function (props) {
  const { children } = props;
  const todoContext = useContext(TodoContext);
  const [todos, setTodo] = useState([todoContext.todos]);

  const newTodoContext = {
    todos,
    setTodo: (todo) => {
      setPersistentTodos(todo);
      setTodo(todo);
    },
  };

  return (
    <TodoContext.Provider value={newTodoContext}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
