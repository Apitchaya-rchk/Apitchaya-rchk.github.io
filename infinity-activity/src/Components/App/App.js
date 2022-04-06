// import React from 'react';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import './App.css';


function App() {
  return (
    // <div>
    //   <h1>Ja<span className="highlight">mmm</span>ing</h1>
    //   <div className="App">
    //     {/* <!-- Add a SearchBar component --> */}
    //     <div className="App-playlist">
    //       {/* <!-- Add a SearchResults component --> */}
    //       {/* <!-- Add a Playlist component --> */}
    //     </div>
    //   </div>
    // </ div>
    <div className='App'>
      <ResponsiveNavbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
