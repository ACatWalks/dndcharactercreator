import './App.css';
import React from 'react'
import CharacterForm from './Form'
import RaceCards from './RaceCards'
import ClassCards from './ClassCards'

function App() {
  let raceArray = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling', 'Aasimar'];
  let race = raceArray[Math.floor(Math.random()*raceArray.length)];
  let classArray = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
  let characterClass = classArray[Math.floor(Math.random()*classArray.length)];
  return (
    <div className="App">
      <h1>Create Your DnD 5e Character!</h1>
      <RaceCards />
      <ClassCards />
      <CharacterForm race={race} characterClass={characterClass}/>
    </div>
  );
}

export default App;
