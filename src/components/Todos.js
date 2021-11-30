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

  const handleStopSubmitTask = (evt) => {
    evt.preventDefault();
  };

  const handleSubmitTask = (evt) => {
    evt.preventDefault();
    if (inputTask === "") {
      // タスク未入力は認めない
      window.alert("タスクを入力してください");
      return;
    }

    const found = todos.find((todo) => todo.item === inputTask);
    if (found) {
      // タスクの重複は認めない
      window.alert("タスクが重複しています");
      return;
    }

    setTodo((todo) => [...todo, { item: inputTask, isCompleted: false }]);
    setInputTask("");
  };

  const handleCompleteTask = (completeTask) => {
    const completedTodos = [...todos].map((todo) => {
      if (todo.item === completeTask.item) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodo(completedTodos);
  };

  const handleDeleteTask = (deleteTask) => {
    const deletedTodos = [...todos].filter((todo) => todo.item !== deleteTask);
    setTodo(deletedTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div className="flex">
        <img src={NecoIcon} alt="ネコアイコン" title="ネコ" width="10%" />
        <form id="task_form" onSubmit={handleStopSubmitTask}>
          <input
            id="task_input"
            type="text"
            value={inputTask}
            onChange={handleInputTask}
          />
          <button id="task_submit" type="button" onClick={handleSubmitTask}>
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
                onClick={() => handleDeleteTask(todo.item)}
              >
                Delete
              </button>
              <button
                type="button"
                className="task_button"
                onClick={() => handleCompleteTask(todo)}
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
