import { createContext, useState } from "react";

export const TodoContext = createContext({});

const TodoProvider = function (props) {
  const { children } = props;
  const [todos, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
