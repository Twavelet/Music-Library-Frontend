import React, { useState } from 'react';
import axios from 'axios'
// import getAllSongs from '../App'

const CreateSongForm = (props) => {
    const [title, setTitle] = useState([])
    const [artist, setArtist] = useState([])
    const [album, setAlbum] = useState([])
    const [releaseDate, setReleaseDate] = useState([])
    const [genre, setGenre] = useState([])
    


  async function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre
        }
        props.addNewSongProperty(newSong)
        
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        console.log(response)
        console.log(newSong)
    }



    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input placeholder='Enter the Song Title:' type='string' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Artist</label>
                <input placeholder='Enter the Artist:' type='string' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input placeholder='Enter the Album Title:' type='string' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input placeholder='Enter the Release Date of the Album:' type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input placeholder='Enter the Genre:' type='string' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )

}

export default CreateSongForm;