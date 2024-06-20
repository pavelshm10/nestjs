import React,{ useMemo } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './components/users/Users';
import Home from './components/home/Home';
import About from './components/about/About';



function App() {
  const MemoizedUsersComponent = useMemo(() => <Users />, []);
  console.log("42223");
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/users" element={MemoizedUsersComponent} />
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>)
}

export default App;
