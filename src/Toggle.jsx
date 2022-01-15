import PropTypes from 'prop-types';
import { useState } from 'react';

const Toggle = ({ initialState, text, onChange }) => {
  const [isActive, setIsActive] = useState(initialState);

  return (
    <div>
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
