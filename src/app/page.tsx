'use client';

import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}