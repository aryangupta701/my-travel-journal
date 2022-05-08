import React from 'react'
import './App.css';
import Header from './components/Header'
import Place from './components/Place'
import data from './data'

function App() {
  const places = data.map((item)=>{
      return(
        <Place key={item.id} item={item} className="place-single"/>
      )
  })
  return (
    <div className="App">
      <Header />
      <div className='places'>
        {places} 
      </div>
    </div>
  );
}

export default App;
