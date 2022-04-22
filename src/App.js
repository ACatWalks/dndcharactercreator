import './App.css';
import React, {useState} from 'react'
import CharacterForm from './Form'
import RaceCards from './RaceCards'
import ClassCards from './ClassCards'

function App() {
  const [race, setRace] = useState('')
  const [characterClass, setCharacterClass] = useState('')

  const handleRaceClick = (e) => {
    let element = e.target
    setRace(`${element.id}`)
  }

  const handleClassClick = (e) => {
    let element = e.target
    setCharacterClass(`${element.id}`)
  }
  return (
    <div className="App">
      <h1>Create Your DnD 5e Character!</h1>
      <h2>Choose Your Race</h2>
      <RaceCards onClick={handleRaceClick}/>
      <h2>Choose Your Class</h2>
      <ClassCards onClick={handleClassClick}/>
      <CharacterForm race={race} characterClass={characterClass}/>
    </div>
  );
}

export default App;
