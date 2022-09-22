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
        <form onSubmit={handleSubmit} className="form-grid bg-info p-2 text-dark bg-opacity-10">
            <div className='form-group'>
                <label>Title</label>
                <input placeholder='Enter the Song Title:' className='form-control' type='string' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Artist</label>
                <input placeholder='Enter the Artist:' className='form-control' type='string' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input placeholder='Enter the Album Title:' className='form-control' type='string' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Release Date</label>
                <input placeholder='Enter the Release Date of the Album:' className='form-control' type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input placeholder='Enter the Genre:' className='form-control' type='string' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )

}

export default CreateSongForm;