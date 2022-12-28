import React from 'react';
import './App.css'
import './Body.css'
import Titles from './component/Title'
import Body from './component/Body';


function App() {

  let state = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],

    datasets: [
      {
        label: "",
        backgroundColor: 'hsl(10, 79%, 65%)',
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        pointerStyle:'line',
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
      }
    ]
  }

  return (
    <div className="App">

      <div className='container'>

         <div className="banner">

           <Titles />
           <Body state={state}/>  

         </div>

      </div>
      
    </div>
  );
}

export default App;
