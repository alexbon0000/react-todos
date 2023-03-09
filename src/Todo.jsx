function Todo({ todo, removeTask, toggleTask }) {
  return (
    <div
      className={todo.complete ? "todoBox complete" : "todoBox"}
      key={todo.id}
    >
      <div
        className={todo.complete ? "todoTask complete" : "todoTask"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <button className="btnTodo" onClick={() => removeTask(todo.id)}>
        Удалить
      </button>
    </div>
  );
}
export default Todo;
