import React from 'react';

interface TodoListProps {
  todos: string[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo, index) => (
        <li key={index} className="mb-2">{todo}</li>
      ))}
    </ul>
  );
}