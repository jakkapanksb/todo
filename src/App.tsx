import React from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import TodoList, { Todo } from './components/TodoList';

function App() {
  const todoRef = React.useRef<HTMLInputElement>(null);
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = todoRef.current?.value;
    console.log(name);
    if (name) {
      setTodos((todos) => {
        return [
          ...todos,
          {
            todoId: uuid(),
            todoName: name,
            done: false,
          },
        ];
      });
      if (todoRef.current) todoRef.current.value = '';
    }
  };

  const handleTodoDelete = (todoId: string) => {
    setTodos((todos) => {
      const index = todos.findIndex((todo) => todo.todoId === todoId);
      return index > -1 ? [...todos].splice(index, 1) : todos;
    });
  };

  return (
    <div
      className='app'
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        textAlign: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input name='todoName' ref={todoRef} style={{ marginRight: 16 }} />
        <button type='submit'>Add</button>
      </form>
      {todos.map((todo) => (
        <TodoList todo={todo} handleTodoDelete={handleTodoDelete} />
      ))}
    </div>
  );
}

export default App;
