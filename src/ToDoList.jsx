import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onChange }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onChange={onChange} />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  todos: [],
  onChange: (id, newState) => {},
};

export default ToDoList;
