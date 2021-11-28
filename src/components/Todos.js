import { useState } from "react";
import NecoIcon from "../pics/neco_icon.png";

// export default function Todos() {
const Todos = function () {
  const [todos, setTodo] = useState([
    { item: "aaa", isCompleted: false },
    { item: "bbb", isCompleted: false },
    { item: "ccc", isCompleted: false },
  ]);

  const [inputTask, setInputTask] = useState("");
  const handleInputTask = (evt) => {
    setInputTask(evt.target.value);
  };

  const handleStopTaskSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleTaskSubmit = (evt) => {
    evt.preventDefault();
    if (inputTask === "") {
      // タスク未入力は認めない
      window.alert("タスクを入力してください");
      return;
    }

    setTodo((todo) => [...todo, { item: inputTask, isCompleted: false }]);
    setInputTask("");
  };

  const handleTaskComplete = (completeTask) => {
    const completedTodos = [...todos].map((todo) => {
      if (todo.item === completeTask.item) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodo(completedTodos);
  };

  const handleTaskDelete = (deleteTask) => {
    const deletedTodos = [...todos].filter((todo) => todo.item !== deleteTask);
    setTodo(deletedTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div className="flex">
        <img src={NecoIcon} alt="ネコアイコン" title="ネコ" width="10%" />
        <form id="task_form" onSubmit={handleStopTaskSubmit}>
          <input
            id="task_input"
            type="text"
            value={inputTask}
            onChange={handleInputTask}
          />
          <button id="task_submit" type="button" onClick={handleTaskSubmit}>
            やること追加
          </button>
          <button id="task_delete" type="button">
            全削除
          </button>
        </form>
      </div>
      <div id="table">
        <h2>やることリスト</h2>
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
                type="button"
                className="task_button"
                onClick={() => handleTaskDelete(todo.item)}
              >
                Delete
              </button>
              <button
                type="button"
                className="task_button"
                onClick={() => handleTaskComplete(todo)}
              >
                {todo.isCompleted === false ? "Complete" : "Restore"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
