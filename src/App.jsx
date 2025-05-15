import "./App.css";

import ExpandedView from "./pages/ExpandedView";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden justify-between">
        <SideBar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={
                <Search
                  location="Boulder"
                  name="Bolder Boulder"
                  date="May 26"
                />
              }
            />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/expanded" element={<ExpandedView />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
