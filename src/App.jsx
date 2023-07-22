import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/landing.jsx';
import Create from './components/create.jsx'
import Movement from './components/mediums/movement.jsx';
import Music from './components/mediums/music';
import VisualArt from './components/mediums/visualart';
import CreativeWriting from './components/mediums/creativewriting.jsx'
import NavBar from './components/navbar.jsx';
import PromptParents from './components/promptparents/promptshare.jsx'

function App() {
    const [postId, setPostId] = useState(null);
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<NavBar />}>
        <Route path="/" element={<Landing />} />
        <Route path ="/creativewriting" element={<PromptParents postId={postId} />} /> 
        <Route path ="/movement" element={<Movement postId={postId}/>} /> 
        <Route path ="/music" element={<Music postId={postId}/>} /> 
        <Route path ="/visualart" element={<VisualArt postId={postId}/>} />  
        {/* <Route path ="/archive" element={<Archive postId={postId}/>} /> */}
    </Route>
    </Routes>
   </BrowserRouter>
   
    </>
  )
}

export default App;