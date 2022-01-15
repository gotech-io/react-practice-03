import PropTypes from 'prop-types';

const ToDoItem = ({ todo, onChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={(e) => onChange(todo.id, e.currentTarget.checked)}
      />
      <span>{todo.title}</span>
    </li>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  onChange: (id, newState) => {},
};

export default ToDoItem;
