// import { useState } from 'react'
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Topbar from "./scenes/global/topbar"

function App() {
  const [theme, colorMode] = useMode();
  // const [count, setCount] = useState(0);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <div className="app">
            <main className="content">
              <Topbar />
            </main>
          </div>
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
