import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';



function App() {


  const times = [
    {
      nome: 'Rocket League',
      corPrimaria: '#57C27B',
      corSecundaria: '#d8f7e9',
    },
    {
      nome: 'Rainbow Six Siege',
      corPrimaria: '#B2CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Warzone',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Valorant',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'League of Legend',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Overwatch',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Couter-Striker',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  
  const [teammates, setTeammate] = useState([])

  const aoTeammateCadastrado = (teammate) => {
    console.log(teammate)
    setTeammate([...teammates, teammate])

  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoTeammateCadastrado = {teammate => aoTeammateCadastrado(teammate)}/>
     {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria}  
      corSecundaria={time.corSecundaria}
      teammates={teammates.filter(teammates => teammates.time == time.nome)}
       />)}
      
      
    </div>
  );
}

export default App;
