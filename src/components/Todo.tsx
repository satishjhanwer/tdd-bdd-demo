import React, { useState } from 'react';

const Todo: React.FC = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodoList([...todoList, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
