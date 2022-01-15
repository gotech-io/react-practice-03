import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { ThemeContext } from './themeContext';

const Toggle = ({ initialState, text, onChange }) => {
  const [isActive, setIsActive] = useState(initialState);
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.primaryColor, color: theme.textColor }}>
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => {
            setIsActive(e.currentTarget.checked);
            onChange(e.currentTarget.checked);
          }}
        />
        {text}
      </label>
    </div>
  );
};

Toggle.propTypes = {
  initialState: PropTypes.bool.isRequired,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  initialState: false,
  onChange: (checked) => {},
};

export default Toggle;
