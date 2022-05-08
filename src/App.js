import React from 'react'
import './App.css';
import Header from './components/Header'
import Place from './components/Place'
import data from './data'

function App() {
  // const places = data.map((item)=>{
  //     return(
  //       <Place id={item.id} item={item} />
  //     )
  // })
  return (
    <div className="App">
      <Header />
      {/* {places} */}
      <Place 
        id={data[0].id}
        item = {data[0]}
      />
    </div>
  );
}

export default App;
