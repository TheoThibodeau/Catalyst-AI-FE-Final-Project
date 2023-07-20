import React from 'react'
import PomodoroTimer from '../components/create/pomodoro';
import Stopwatch from '../components/create/stopwatch';
import Metronome from '../components/create/metronome';
import Audio from '../components/create/audio';


const Create = () => {
    return(
        <div>
        <h1>Create page</h1>
        <Audio />
        <Metronome />
        <Stopwatch />
        <PomodoroTimer />
        </div>
    )
}
export default Create