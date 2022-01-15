import './App.css';
import { useState, useContext } from 'react';
import Header from './Header';
import FetchToDoList from './FetchToDoList';
import Toggle from './Toggle';
import ThemeProvider from './themeContext';

const App = () => {
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <ThemeProvider>
      <div className="App">
        <Header text="TODO LIST" />
        <Toggle
          text="Show Completed"
          initialState={showCompleted}
          onChange={setShowCompleted}
        />
        <FetchToDoList url="./todos.json" showCompleted={showCompleted} />
      </div>
    </ThemeProvider>
  );
};

export default App;
