import React, { useState, useRef } from "react";
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";
import Notebook from "../components/create/notebook";
import Dictionary from "../components/create/dictionary";
import { Editor } from '@tinymce/tinymce-react';

const Create = ({ postId, output }) => {
  const [activeComponent, setActiveComponent] = useState("");
  const components = {
    Audio: <Audio />,
    Metronome: <Metronome />,
    Stopwatch: <Stopwatch />,
    PomodoroTimer: <PomodoroTimer />,
    Notebook: <Notebook />,
    Dictionary: <Dictionary />,
  };

  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className=" p-4">
        <div className="text-center border font-extralight text-xl pb-4">
          Prompt: {output}
        </div>
        <div className="flex flex-row space-y-4">
          <button
            className="w-full px-4 py-2 hover:underline text-gray-800 font-mono"
            onClick={() => setActiveComponent("Stopwatch")}
          >
            Stopwatch
          </button>
          <button
            className="w-full px-4 py-2 hover:underline text-gray-800 font-mono "
            onClick={() => setActiveComponent("Audio")}
          >
            Audio Play
          </button>
          <button
            className="w-full px-4 py-2 hover:underline text-gray-800 font-mono "
            onClick={() => setActiveComponent("Metronome")}
          >
            Metronome
          </button>
          <button
            className="w-full px-4 py-2 hover:underline text-gray-800 font-mono "
            onClick={() => setActiveComponent("PomodoroTimer")}
          >
            Pomodoro Timer
          </button>

          <button
            className="w-full px-4 py-2 hover:underline text-gray-800 font-mono "
            onClick={() => setActiveComponent("Dictionary")}
          >
            Dictionary
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center border p-4">{components[activeComponent]}</div>
      <div className="justify-center">  
         <Editor
        apiKey='5c49z6msz9y26e8fv03ptpphkxydj6nybm6x070w4arrr81l'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Take notes ... </p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button className="p-4 border m-4"onClick={log}>Save</button></div>
    </div>

  );
};

export default Create;
