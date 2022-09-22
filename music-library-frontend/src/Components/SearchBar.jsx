import React from "react";
import { useState } from "react";

const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState('')
    

    const searchHandler = (event, searchValue) => {
        event.preventDefault()
        setSearchInput(searchValue)
        if (searchInput !== ''){
            const filteredData = props.parentData.filter((item) =>{
                if (item.title.toLowerCase().includes(searchInput.toLowerCase())){
                    return true
                }
                else if (item.artist.toLowerCase().includes(searchInput.toLowerCase())){
                    return true
                }
                else if (item.album.toLowerCase().includes(searchInput.toLowerCase())){
                    return true
                }
                else if (item.release_date.toLowerCase().includes(searchInput.toLowerCase())){
                    return true
                }
                else if (item.genre.toLowerCase().includes(searchInput.toLowerCase())){
                    return true
                }
            })
            props.setSongs(filteredData)
        }
    }
    return (
        <form onSubmit={searchHandler} className='form-inline'>
        <div classname='form-group mx-sm-3 mb-2'>
            <label className="sr-only"><b>SEARCH</b></label>
            <input placeholder='Enter your search here:' className="form-control" type='text' value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
        </div>
        <div>
            <button type='submit'  className="btn btn-primary mb-2">Submit</button>
        </div>
    </form>

    )


}
export default SearchBar;

//use.includes(searchInput)


// i want to get user input then take that and use it as the filter reference