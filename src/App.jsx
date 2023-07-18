import { useState } from 'react'
import './App.css'
import CreativeWriting from './components/mediums/creativewriting.jsx'

function App() {
    const [postId, setPostId] = useState(null);
  return (
    <>
        <CreativeWriting   postId={postId}/>
        {/* {postId !== null && <PoetryPrompt postId={postId} />} */}
    </>
  )
}

export default App