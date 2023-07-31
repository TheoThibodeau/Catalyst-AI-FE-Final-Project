import React, { useState } from 'react';
import axios from 'axios';

const CreativeWritingSave = ({ postId }) => {
    const [note, setNote] = useState("");

  const handlePatch = (e) => {
    e.preventDefault();
    axios
      .patch(`https://catalyst-x226.onrender.com/api/response/write/${postId}`, {
        note: note,
      })
      .then((response) => {
        setNote(response.data.note);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
    <div>
        <button className="h-10 p-2 w-20 border m-2 justify-center" onClick={handlePatch}>Save</button>
    </div>
    </>
  );
};

export default CreativeWritingSave;