import React, { useMemo } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import About from './components/about/About';
import Users from './components/users/Users';
import Home from './components/home/Home';



function App() {
  const MemoizedUsersComponent = useMemo(() => <Users />, []);
  console.log("4222");
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/users" element={MemoizedUsersComponent} />
      </Routes>
    </div>)
}

export default App;
