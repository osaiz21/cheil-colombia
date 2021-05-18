import React,  { useState, useEffect } from 'react';
import './assets/css/App.css';
// Componentes.
import Grid from './components/Grid';
import "bootstrap/dist/css/bootstrap.min.css"
import env from 'react-dotenv'

const App = () => {
  const [countHoteles, setCountHoteles] = useState([]) 

  useEffect(() => {
    getHoteles()
  },[])

  const getHoteles = async () => {
    const data = await fetch(`${env.APP_BACKEND}listar`)
    const { data:listadoHoteles } = await data.json()
    
    setCountHoteles(listadoHoteles)
  }
  

  return (
    <div className="App">
      <Grid countHoteles={countHoteles}/>
    </div>
  );
}

export default App;
