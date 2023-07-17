import { useState } from 'react'
import './App.css'
import Poetry from "./components/prompt"
import PoetryPrompt from "./components/promptresponse"

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