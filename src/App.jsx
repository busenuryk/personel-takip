import { useState } from 'react';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/ui/main';
import Content from './components/ui/Content';
import Profile from './components/Profile/Profile';
import Team from './components/Team/Team';
import Events from './components/Events/Events';
const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} font-quickSand`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Main/>
    </div>

  );
};

export default App;
