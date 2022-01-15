import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { ThemeContext } from './themeContext';

const ToDoInput = ({ onAdd }) => {
  const [text, setText] = useState('');
  const { theme } = useContext(ThemeContext);

  const handleAdd = (e) => {
    setText('');
    onAdd(text);
  };
  return (
    <div style={{ background: theme.primaryColor, color: theme.textColor }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button
        disabled={!text}
        onClick={handleAdd}
        style={{ background: theme.primaryColor, color: theme.textColor }}
      >
        Add ToDo
      </button>
    </div>
  );
};

ToDoInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

ToDoInput.defaultProps = {
  onAdd: (text) => {},
};

export default ToDoInput;
