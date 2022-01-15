import './App.css';
import { useState } from 'react';
import Header from './Header';
import FetchToDoList from './FetchToDoList';
import Toggle from './Toggle';

const App = () => {
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <div className="App">
      <Header text="TODO LIST" />
      <Toggle
        text="Show Completed"
        initialState={showCompleted}
        onChange={setShowCompleted}
      />
      <FetchToDoList url="./todos.json" showCompleted={showCompleted} />
    </div>
  );
};

export default App;
