import React, { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/landing.jsx';
import Create from './components/create.jsx'
import Movement from './components/mediums/movement.jsx';
import Music from './components/mediums/music';
import VisualArt from './components/mediums/visualart';
import CreativeWriting from './components/mediums/creativewriting.jsx'
import NavBar from './components/navbar.jsx';
import Folio from './components/folio.jsx';
import PromptParents from './components/promptparents/promptshare.jsx';
import MovementPromptParent from './components/promptparents/movementpromptshare.jsx';
import MusicPromptParent from './components/promptparents/musicpromptshare.jsx';
import VisualArtPromptParent from './components/promptparents/visualartpromptshare.jsx';

function App() {
    const [postId, setPostId] = useState(null);
  return (
    <div className="bg-neutral-100">
    <BrowserRouter>
    <Routes>
    <Route element={<NavBar />}>
        <Route path="/" element={<Landing />} />
        <Route path ="/creativewriting" element={<PromptParents postId={postId} />} /> 
        <Route path ="/movement" element={<MovementPromptParent postId={postId} />} /> 
        <Route path ="/music" element={<MusicPromptParent postId={postId} />} /> 
        <Route path ="/visualart" element={<VisualArtPromptParent postId={postId} />} /> 
        <Route path ="/create" element={<Create postId={postId}/>} /> 
        <Route path ="/folio" element={<Folio postId={postId} />} />
        {/* <Route path ="/archive" element={<Archive postId={postId}/>} /> */}
    </Route>
    </Routes>
   </BrowserRouter>
   
    </div>
  )
}

export default App;