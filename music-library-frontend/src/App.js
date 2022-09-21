import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CreateSongForm from './Components/CreateSongForm';
import DisplayMusic from './Components/DisplayMusic';
import SearchBar from './Components/SearchBar';


function App() {

  const [songs, setSongs] = useState([]);

  function addNewSong(song){
    let tempSong = [song, ...songs]
    setSongs(tempSong);
}



  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/')
    console.log(response.data)
    setSongs(response.data)
  }

  useEffect(()=>{
    getAllSongs()
  }, [])

  


  


  return (
    <div>
      <DisplayMusic parentEntries = {songs}/>
      <CreateSongForm addNewSongProperty = {addNewSong}/>
      <SearchBar parentData={songs} setSongs = {setSongs}/>
    </div>
  );
}

export default App;
