import { createContext, useState } from 'react';

const themeNames = {
  light: 'light',
  dark: 'dark',
};

const themes = {
  light: {
    name: themeNames.light,
    primaryColor: '#e8e8e8',
    textColor: '#000000',
  },
  dark: {
    name: themeNames.dark,
    primaryColor: '#424242',
    textColor: '#ffffff',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const changeTheme = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, themeNames };
export default ThemeProvider;
