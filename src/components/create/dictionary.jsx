import React, { useState } from 'react';
import axios from 'axios';
import { Collapse, initTE } from "tw-elements";
import SmallLoadingRobot from "../musedictionary.jsx";
import "./../lexicon.css"
  
const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [synonym, setSynonym] = useState('');
  const [antonym, setAntonym] = useState('');
  const [sentence, setSentence] = useState('');
  const [joke, setJoke] = useState('');
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');
  const [isLoading, setisLoading] = useState(false);

  initTE({ Collapse });
//   const textColor = {color: 'white'}
  const handlePost = (e) => {
    e.preventDefault();
    setisLoading(true)
    axios
      .post('https://catalyst-x226.onrender.com/api/definition/generate/', {
        word: word,
      })
      .then((response) => {
        const defineId = response.data.id;
        axios
          .get(`https://catalyst-x226.onrender.com/api/definition/${defineId}`)
          .then((response) => {
            setDefinition(response.data.definition);
            setSynonym(response.data.synonym);
            setAntonym(response.data.antonym);
            setSentence(response.data.sentence);
            setJoke(response.data.joke);
            setColor(response.data.color);
            setHex(response.data.hex);
          })
          .finally(() => setisLoading(false))
      })
      .catch((error) => console.error(error));
  };
    
    const handleInputChange = (e) => {
        setWord(e.target.value);
    };

    return (
<>
    <div>
    {isLoading && <SmallLoadingRobot/>}
    {!isLoading && (
            <form className="lexi-form">
                <div className='word-and-input'>
                <input className="text-field"
                    type="text"
                    onChange={handleInputChange} 
                    value={word}
                    placeholder="Enter a Word"
                    style={{
                        border: '1px solid black',
                        padding: '8px'
                    }}
                />
                    <button onClick={handlePost} className="border border-slate-400 p-1 mb-3 bg-slate-200" type="submit">Ask Muse</button>
                </div>
              
            </form>
    )}
    

  <div
    className="rounded-none border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 className="mb-0" id="headingZero">
    
      <button
        className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseZero"
        aria-expanded="false"
        aria-controls="collapseZero">
        <div className='font'>Definition</div>
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg]  transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
        )}
    <div
      id="collapseZero"
      className="hidden"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingZero"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div className="px-5 py-4">
      {definition && <p>{definition}</p>}
      </div>
        )}
    </div>
  </div>
  


  <div
    className="rounded-none border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
    {!isLoading && (
    <h2 className="mb-0" id="headingOne">
    
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        <div className="font">Synonyms</div>
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg]  transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    )}
    <div
      id="collapseOne"
      className="hidden"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div className="px-5 py-4">
      {synonym && <p>{synonym}</p>}
      </div>
        )}
    </div>
  </div>

  <div
    className="rounded-none border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
    {!isLoading && (
    <h2 className="mb-0" id="headingTwo">
    
      <button 
        className="font group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        <div className='font'>Antonyms</div>
        <span
          className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg]  transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    )}
    <div
      id="collapseTwo"
      className="hidden"
      data-te-collapse-item
      aria-labelledby="headingTwo"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div className="px-5 py-4">
      {antonym && <p>{antonym}</p>}
      </div>
        )}
    </div>
  </div>

<div
    className="rounded-none border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 className="mb-0" id="headingThree">
    
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        <div className='font'>Joke</div>
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg]fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    
    </h2>
    )}
    <div
      id="collapseThree"
      className="hidden"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingThree"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div className="px-5 py-4">
      {joke && <p>{joke}</p>}
      </div>
        )}
    </div>
  </div>


<div
    className="rounded-none border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 className="mb-0" id="headingFour">
    
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour">
        <div className="font">Use the word in a sentence</div>
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg]  transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    
    </h2>
    )}
    <div
      id="collapseFour"
      className="hidden"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingFour"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div className="px-5 py-4">
      {sentence && <p>{sentence}</p>}
      </div>
        )}
    </div>
  </div>
  <div
    className="rounded-none border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 className="mb-0" id="headingFive">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseFive"
        aria-expanded="false"
        aria-controls="collapseFive">
            <div className='font'>Color Association</div>
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#a4a4a4] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
        )}
    <div
      style={{ backgroundColor: hex }}
      id="collapseFive"
      className="hidden"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingFive"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div className="px-5 py-4">
        {color && <p style={{ color: '#6b7280' }}>{color}</p>}
      </div>
        )}
    </div>
  </div>
</div>
</>
    );
};


export default Dictionary;