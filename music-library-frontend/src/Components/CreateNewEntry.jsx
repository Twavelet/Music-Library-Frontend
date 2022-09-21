import React, { useState, useEffect } from 'react';

const CreateSongForm = (props) => {
    const [title, setTitle] = useState([])
    const [artist, setArtist] = useState([])
    const [album, setAlbum] = useState([])
    const [releaseDate, setReleaseDate] = useState([])
    const [genre, setGenre] = useState([])
    


    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre
        }
        console.log(newSong)
        props.addNewSongProperty(newSong)
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