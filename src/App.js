import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';



function App() {
  
  const [teammates, setTeammate] = useState([])

  const aoTeammateCadastrado = (teammate) => {
    console.log(teammate)
    setTeammate([...teammates, teammate])

  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario aoTeammateCadastrado = {teammate => aoTeammateCadastrado(teammate)}/>
      
     
      
      
    </div>
  );
}

export default App;
