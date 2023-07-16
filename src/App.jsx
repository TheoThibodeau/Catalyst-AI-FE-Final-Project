import { useState } from 'react'
import './App.css'
import Poetry from "./components/poetry"
import PoetryPrompt from "./components/poetryresponse"

function App() {
    const [postId, setPostId] = useState(null);
  return (
    <>
        <Poetry/>
        {postId !== null && <PoetryPrompt postId={postId} />}
    </>
  )
}

export default App

