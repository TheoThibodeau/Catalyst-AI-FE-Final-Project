import { useState } from 'react'
import './App.css'
import CreativeWriting from './components/mediums/creativewriting.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
    const [postId, setPostId] = useState(null);
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path ="/creativewriting" element={<CreativeWriting />} /> 
        <Route path ="/movement" element={<Movement />} /> 
        <Route path ="/music" element={<Music />} /> 
        <Route path ="/visualart" element={<VisualArt />} /> 
        <Route path ="/create" element={<Create />} /> 
        <Route path ="/archive" element={<Archive />} />
    </Routes>
   
    </>
  )
}

export default App


{/* {postId !== null && <PoetryPrompt postId={postId} />} */}