import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import Bar from "./scenes/bar";
import Form from "./scenes/form";

import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {reactLocalStorage} from 'reactjs-localstorage';
import Weather from "./scenes/weather";
import Occupancy from "./scenes/occupancy";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const main = (<div className="app">
  <Sidebar isSidebar={isSidebar} user="Yo" />
  <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
    <Routes>
      <Route path="/bar" element={<Bar />} />
      <Route path="/occupancy" element={<Occupancy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </main>
  </div>)

  
  const username = reactLocalStorage.get("Username");
  console.log(username)

  const login = (
    <main className="content" >
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </main>
    )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {username ? main : login}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
