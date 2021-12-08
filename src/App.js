import React from "react";
import Todos from "./components/Todos";
import TodoProvider from "./components/provider/TodoProvider";

const App = function () {
  return (
    <div className="App">
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
};

export default App;
