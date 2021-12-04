import React from "react";
import TodoProvider from "./provider/TodoProvider";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todos = function () {
  return (
    <div>
      <TodoProvider>
        <h1>ToDo List</h1>
        <TodoInput />
        <div id="table">
          <h2>やることリスト</h2>
          <TodoItem />
        </div>
      </TodoProvider>
    </div>
  );
};

export default Todos;
