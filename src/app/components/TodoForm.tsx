import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-1">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border rounded mr-2 text-black"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
}