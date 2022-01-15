import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';

const FetchToDoList = ({ url, showCompleted }) => {
  const [todos, setTodos] = useState();
  const [filteredTodos, setFilteredTodos] = useState();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(url);
      const remoteTodos = await response.json();
      setTodos(remoteTodos);
    };
    fetchTodos();
  }, [url]);

  useEffect(() => {
    if (showCompleted) {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    }
  }, [todos, showCompleted]);

  const handleChange = (id, newState) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: newState };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return <ToDoList todos={filteredTodos} onChange={handleChange} />;
};

export default FetchToDoList;
