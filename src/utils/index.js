// ローカルストレージに保存されたデータを取得
export const getPersistentTodos = () => {
  const persistentTodos = JSON.parse(localStorage.getItem("todo"));
  return persistentTodos ?? [];
};

// ローカルストレージにデータを保存
export const setPersistentTodos = (todo) => {
  localStorage.setItem("todo", JSON.stringify(todo));
};

// 全削除ボタン押下時 ⇒ LocalStorageを削除)
export const resetPersistentTodos = () => {
  //  localStorage.clear();
  localStorage.removeItem("todo");
};
