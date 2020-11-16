/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import TodoList, { Todo } from './components/TodoList';

function App() {
  const todoRef = React.useRef<HTMLInputElement>(null);
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = todoRef.current?.value;
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
    setTodos((todos) => todos.filter((todo) => todo.todoId !== todoId));
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
        <input
          css={{
            marginRight: 16,
            border: 0,
            borderBottom: '2px #404040 solid',
            '&:focus': {
              outline: 'unset',
            },
          }}
          name='todoName'
          ref={todoRef}
        />
        <button
          css={{
            border: 0,
            borderRadius: 5,
            fontSize: '1.2em',
            backgroundColor: 'white',
            '&:focus': {
              outline: 'unset',
            },
            '&:hover': {
              backgroundColor: 'rgb(239, 239, 239)',
            },
          }}
          type='submit'
        >
          Add
        </button>
      </form>
      {todos.map((todo) => (
        <TodoList
          key={todo.todoId}
          todo={todo}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </div>
  );
}

export default App;
