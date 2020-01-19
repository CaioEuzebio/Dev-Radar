import React from 'react';
import api from './services/api';
import './global.css'
import './App.css'
import './SideBar.css'
import './Main.css'
import { useEffect } from 'react';
import { useState } from 'react';
import DevItem from './components/devitem';
import DevForm from './components/devform';



function App() {

  const [devs, setDevs] = useState();

  



  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
      console.log(devs);
    }
    
    loadDevs();
    

  }, []);
    
  
  async function handleAddDev(data) {
    
  

    const response = await api.post('/devs', data)
   

    setDevs([...devs, response.data]);

  }

  return (
   
  <div id="app">
    <aside>
      <strong>Cadastrar</strong>
        
        <DevForm onSubmit={handleAddDev} />

    </aside>
    <main>
      <ul>
        {devs && devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
            
          ))}
       </ul>
       




    </main>
  </div>

  );
}

export default App;
