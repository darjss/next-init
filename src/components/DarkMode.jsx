const DarkMode = ({ isDark , themeFunc }) => {
  if (isDark) {
    return (
      <div
        onClick={() => {
          themeFunc();
        }}
      >
        <h1>🌑</h1>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          themeFunc();
        }}
      >
        <h1>🌕</h1>
      </div>
    );
  }
};
export default DarkMode;
