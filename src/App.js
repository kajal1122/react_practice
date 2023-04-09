import React,{useEffect, useState} from 'react';
import axios from 'axios';
import RickandMorty from './RickandMorty';

function App() {
   const [charName , setCharName] = useState([]);
   useEffect(()=>{
    getCharNames();
   } ,[])
   const  getCharNames =  async ()=>{
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character/1,183,11,22'
    );
      setCharName(response.data);

   }
  return (
    <>
      <h1 style={{margin:10}}>Homework</h1>
      <div>{charName.map(chars => <RickandMorty name={chars.name} gender={chars.gender} species={chars.species} image={chars.image}/>)}</div>
    </>
  );
}

export default App;
