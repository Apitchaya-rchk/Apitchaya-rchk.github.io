// import React from 'react';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import AddJourney from '../AddJourney/AddJourney';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';


function App() {


  return (
   
    <div className='App'>
      <ResponsiveNavbar />

      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <AddJourney />
      {/* <Dashboard /> */}
    
    </div>
  );
}

export default App;
