import React, { useState } from 'react';
import axios from 'axios';
import { Collapse, initTE } from "tw-elements";
import SmallLoadingRobot from "./../robotdict.jsx";
  
const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [synonym, setSynonym] = useState('');
  const [antonym, setAntonym] = useState('');
  const [sentence, setSentence] = useState('');
  const [joke, setJoke] = useState('');
  const [color, setColor] = useState('');
  const [isLoading, setisLoading] = useState(false);

  initTE({ Collapse });

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
          })
          .finally(() => setisLoading(false))
      })
      .catch((error) => console.error(error));
  };
  
  const updateColorAssociation = () => {
    const container = document.getElementById("colorAssociationContainer");
    container.style.backgroundColor = color; // Use the 'color' state value as the background color
  };
    
    const handleInputChange = (e) => {
        setWord(e.target.value);
    };

    return (
<>
    <div className="border p-4">
    {isLoading && <SmallLoadingRobot />}
    {!isLoading && (
            <form>
                <label>Define : </label>
                <input
                    type="text"
                    value={word}
                    onChange={handleInputChange} 
                    style={{
                        border: '1px solid black',
                        borderRadius: '4px',
                        padding: '8px'
                    }}
                />
                <button onClick={handlePost} className="border p-4 m-4" type="submit">Ask Muse</button>
            </form>
    )}
    
            <div id="accordionExample">
  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 class="mb-0" id="headingOne">
    
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseZero"
        aria-expanded="true"
        aria-controls="collapseZero">
        Definition
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
        )}
    <div
      id="collapseZero"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingZero"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div class="px-5 py-4">
      {definition && <p>{definition}</p>}
      </div>
        )}
    </div>
  </div>
  </div>
        

<div id="accordionExample">
  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
    {!isLoading && (
    <h2 class="mb-0" id="headingOne">
    
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        Synonyms
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    )}
    <div
      id="collapseOne"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div class="px-5 py-4">
      {synonym && <p>{synonym}</p>}
      </div>
        )}
    </div>
  </div>

  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
    {!isLoading && (
    <h2 class="mb-0" id="headingTwo">
    
      <button
        class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        Antonyms
        <span
          class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    )}
    <div
      id="collapseTwo"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingTwo"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div class="px-5 py-4">
      {antonym && <p>{antonym}</p>}
      </div>
        )}
    </div>
  </div>

  <div
    class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 class="accordion-header mb-0" id="headingThree">
    
      <button
        class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        Joke
        <span
          class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    
    </h2>
    )}
    <div
      id="collapseThree"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="headingThree"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div class="px-5 py-4">
      {joke && <p>{joke}</p>}
      </div>
        )}
    </div>
  </div>
</div>
</div>


<div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 class="mb-0" id="headingFour">
    
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseFour"
        aria-expanded="true"
        aria-controls="collapseFour">
        Use the word in a sentence
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    
    </h2>
    )}
    <div
      id="collapseFour"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingFour"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div class="px-5 py-4">
      {sentence && <p>{sentence}</p>}
      </div>
        )}
    </div>
  </div>

  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-white">
        {!isLoading && (
    <h2 class="mb-0" id="headingFour">
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-black [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-white dark:[&:not([data-te-collapse-collapsed])]:text-black dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseFive"
        aria-expanded="true"
        aria-controls="collapseFive">
            Color Association
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
        )}
    <div
      id="collapseFive"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingFive"
      data-te-parent="#accordionExample">
        {!isLoading && (
      <div class="px-5 py-4">
        {color && <p>{color}</p>}
      </div>
        )}
    </div>
  </div>
        

            {/* <div>
                <div>
                <button onClick={handleDefine}>define</button>
                {define && <p>{define}</p>}
                </div>
                <div>
                <button onClick={handleSynonym}>synonym</button>
                {synonym && <p>{synonym}</p>}
                </div>
                <div>
                <button onClick={handleAntonym}>antonym{antonym}</button>
                {antonym && <p>{antonym}</p>}
                </div>
                <div>
                <button onClick={handleSentence}>sentence</button>
                {sentence && <p>{sentence}</p>}
                </div>
                <div>
                <button onClick={handleJoke}>joke</button>
                {joke && <p>{joke}</p>}
                </div>
                <div>
                <button onClick={handleColor}>color</button>
                {color && <p>{color}</p>}
                </div>
                
                </div>
            </div> */}
    

</>
    );
};


export default Dictionary;