import React, { useEffect, useState } from "react";
import axios from "axios";

const Folio = () => {
  const [note, setNote] = useState("");


  useEffect(() => {
    axios
    .get(`https://catalyst-x226.onrender.com/api/notebook/${postId}`)
    .then((response) => {
      setNote(response.data.note);
    })
  })
  
    return (
        <>
        <div>
      <h1> Folio </h1>
      <h2>{note}</h2>
      <h3>Where your previous pompts, notes and works in progress will show up</h3>
      </div>
      </>
    );
  };
  
  export default Folio;