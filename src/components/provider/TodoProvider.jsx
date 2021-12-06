import { createContext, useState, useMemo } from "react";

export const TodoContext = createContext({});

const TodoProvider = function (props) {
  const { children } = props;
  const [todos, setTodo] = useState([
    { item: "aaa", isCompleted: false },
    { item: "bbb", isCompleted: false },
    { item: "ccc", isCompleted: false },
  ]);

  const memoedTodo = useMemo(() => ({ todos, setTodo }), [todos]);

  return (
    <TodoContext.Provider value={memoedTodo}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
