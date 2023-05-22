import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import useDarkSide from "./hooks/useDarkSide";

import './App.css'

import HeaderHome from './components/HeaderHome';
import HeaderSub from './components/HeaderSub';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Exercises from './pages/Exercises';
import Diets from './pages/Diets';
import Playlists from './pages/Playlists';
import Favorites from './pages/Favorites';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Settings from './pages/Settings';


const UI1 = () => (
  <>
    <HeaderHome />
    <Outlet />
  </>
);

const UI2 = () => (
  <>
    <HeaderSub />
    <Outlet />
  </>
);

const App = () => {

  const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

  return (
    <div className="app h-screen max-w-full">
      <div className='h-full dark:bg-gray-900'>
        <Routes>
          <Route path='/' element={ <UI1 /> } >
            <Route exact path="/" element={ <Home /> } />
          </Route>
          <Route path='/' element={ <UI2 /> } >
            <Route path="/workouts" element={ <Workouts /> } />
            <Route path="/exercises" element={ <Exercises /> } />
            <Route path="/diets" element={ <Diets /> } />
            <Route path="/playlists" element={ <Playlists /> } />
            <Route path="/favorites" element={ <Favorites /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/settings" element={ <Settings /> } />
          </Route>
        </Routes>
        </div>
    </div>
  )
}

export default App