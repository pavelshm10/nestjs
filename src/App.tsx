import React, { useMemo } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import About from './components/about/About';
import Users from './components/users/Users';
import Home from './components/home/Home';



function App() {
  const MemoizedUsersComponent = useMemo(() => <Users />, []);

  return (
    <div>
      <Routes>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/users" element={MemoizedUsersComponent} />
      </Routes>
    </div>)
}

export default App;
