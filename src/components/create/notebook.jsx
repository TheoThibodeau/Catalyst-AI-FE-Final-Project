import React, { useState, useEffect, useRef } from 'react';


const Notebook = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const [noteId, setNoteId] = useState(null)
    

    useEffect(() => {
        inputRef.current.focus();
        // input.current.selectionStart = 0;
      }, []);

return(
   
<input
ref={inputRef}
className="create-box"
type="text"
value={value}
onChange={(event) => setValue(event.target.value)}
/>

)
}

export default Notebook;