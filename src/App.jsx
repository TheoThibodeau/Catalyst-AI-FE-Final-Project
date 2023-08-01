import React, { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/landing.jsx';
import Create from './components/create.jsx'
import NavBar from './components/navbar.jsx';
import Folio from './components/folio.jsx';
import PromptParents from './components/promptparents/promptshare.jsx';
import MovementPromptParent from './components/promptparents/movementpromptshare.jsx';
import MusicPromptParent from './components/promptparents/musicpromptshare.jsx';
import VisualArtPromptParent from './components/promptparents/visualartpromptshare.jsx';
import UserAuthentication from './components/userauthentication/register';

function App() {
    const [postId, setPostId] = useState(null);
    const [token, setToken] = useState('');
  return (
    <div className="bg-white">
    <BrowserRouter>
    <Routes>
    <Route>
        <Route path="/" element={<Landing />} />
        <Route path ="/creativewriting" element={<PromptParents setPostId={setPostId} />} /> 
        <Route path ="/movement" element={<MovementPromptParent setPostId={setPostId} />} /> 
        <Route path ="/music" element={<MusicPromptParent setPostId={setPostId} />} /> 
        <Route path ="/visualart" element={<VisualArtPromptParent setPostId={setPostId} />} /> 
        <Route path ="/create" element={<Create postId={postId}/>} /> 
        <Route path ="/folio" element={<Folio postId={postId} token={token}/>} />
        <Route path ="/login" element={<UserAuthentication setToken={setToken}/>} />
    </Route>
    </Routes>
   </BrowserRouter>
   
    </div>
  )
}

export default App;