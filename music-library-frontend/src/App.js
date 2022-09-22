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
    <div  className='container-fluid bg-info p-2 text-dark bg-opacity-10'>
      <div className='col-md-6 '>
      <header><SearchBar parentData={songs} setSongs = {setSongs}/></header>
      </div>
      <body>
        <div>
        <DisplayMusic parentEntries = {songs}/>
        <CreateSongForm addNewSongProperty = {addNewSong}/>
        </div>
      </body>
      
      
    </div>
  );
}

export default App;
