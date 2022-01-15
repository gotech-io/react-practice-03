import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext, themeNames } from './themeContext';

const Header = ({ text }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    changeTheme(
      theme.name === themeNames.light ? themeNames.dark : themeNames.light
    );
  };

  return (
    <header
      className="header"
      style={{ background: theme.primaryColor, color: theme.textColor }}
    >
      <h1>
        {text}
        <button onClick={toggleTheme}>{theme.name}</button>
      </h1>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
