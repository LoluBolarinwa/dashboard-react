// import { useState } from 'react'
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  // const [count, setCount] = useState(0);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme= {theme} >
      <>
        <div className="app"></div>
      </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
