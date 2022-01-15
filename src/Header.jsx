import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
