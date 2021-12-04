import { createContext, useState, useMemo } from "react";

export const TodoContext = createContext({});

const TodoProvider = function (props) {
  const { children } = props;
  const [todos, setTodo] = useState([
    { item: "aaa", isCompleted: false },
    { item: "bbb", isCompleted: false },
    { item: "ccc", isCompleted: false },
  ]);

  const memoValue = useMemo(() => ({ todos, setTodo }), []);

  return (
    <TodoContext.Provider value={memoValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
