import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { css } from '@emotion/react';

export interface Todo {
  todoId: string;
  todoName: string;
  done: boolean;
}

interface TodoProp {
  todo: Todo;
  handleTodoDelete: (todoId: string) => void;
}

const iconStyles = css`
  margin-right: 8px;
`;

const TodoList: React.FC<TodoProp> = ({ todo, handleTodoDelete }, ...props) => {
  return (
    <div
      style={{
        padding: 8,
        boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.07)',
        marginTop: 8,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <MdCheckCircle
          className={iconStyles.name}
          fontSize='1em'
          color={todo.done ? 'green' : 'black'}
        />
        <span>{todo.todoName}</span>
      </div>
      <button onClick={() => handleTodoDelete(todo.todoId)}>Delete</button>
    </div>
  );
};

export default TodoList;
