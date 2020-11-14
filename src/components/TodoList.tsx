import React from 'react';

export interface Todo {
  todoId: string;
  todoName: string;
  done: boolean;
}

interface TodoProp {
  todo: Todo;
  handleTodoDelete: (todoId: string) => void;
}

const TodoList: React.FC<TodoProp> = ({ todo, handleTodoDelete }, ...props) => {
  return (
    <div
      {...props}
      style={{
        padding: 8,
        boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.07)',
        marginTop: 8,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span>{todo.todoName}</span>
      <button onClick={() => handleTodoDelete(todo.todoId)}>Delete</button>
    </div>
  );
};

export default TodoList;
