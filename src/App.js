import { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const save = localStorage.getItem("задачи");
    const saveValue = JSON.parse(save) || [];
    return saveValue;
  });
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  useEffect(() => {
    localStorage.setItem("задачи", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h2>Всего задач: {todos.length}</h2>
      <TodoList addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todos.id}
            todo={todo}
            removeTask={removeTask}
            toggleTask={handleToggle}
          />
        );
      })}
    </div>
  );
}

export default App;
