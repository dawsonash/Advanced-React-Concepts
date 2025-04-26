import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import WideCard from './components/WideCard'
import CardText from './components/CardText'
import CardLineGraph from './components/CardLineGraph'
import PersonalGrowthCard from './components/PersonalGrowthCard'
import CardPieChart from './components/CardPieChart'
import TerrainCard from './components/TerrainCard'
import CalendarCard from './components/CalendarCard'
import CalendarContents from './components/CalendarContents'
import ExpandedView from './pages/ExpandedView'
import WeatherCard from './components/WeatherCard'
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Search from './pages/Search';
import Friends from './pages/Friends';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="flex h-screen overflow-hidden justify-between">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

