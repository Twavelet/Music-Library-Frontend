import React from "react";

const DisplayMusic = (props) => {
    return (  
    <table className="table table-striped bg-info p-2 text-dark bg-opacity-10">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Release Date</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
        {props.parentEntries.map((entry, index) => {
          return(
            <tr key={index}>
              <td>{entry.title}</td>
              <td>{entry.artist}</td>
              <td>{entry.album}</td>
              <td>{entry.release_date}</td>
              <td>{entry.genre}</td>
            </tr>
          )
        })}
        </tbody>
    </table>
    );
}
 
export default DisplayMusic;