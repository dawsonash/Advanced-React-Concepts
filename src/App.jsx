import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import WideCard from './components/WideCard'
import SideBar from './components/SideBar'
import CardText from './components/CardText'
import CardLineGraph from './components/CardLineGraph'
import PersonalGrowthCard from './components/PersonalGrowthCard'
import CardPieChart from './components/CardPieChart'
import TerrainCard from './components/TerrainCard'
import CalendarCard from './components/CalendarCard'
import Home from './pages/Home'
import CalendarContents from './components/CalendarContents'
import ExpandedView from './pages/ExpandedView'
import Search from './pages/Search'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <ExpandedView name="Bolder Boulder" date="May 26" location="Boulder" />
  );
}

export default App

