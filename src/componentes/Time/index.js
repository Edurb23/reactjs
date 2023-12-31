import './Time.css'
import Colaborador from '../Colaborador'



const Time = (props) => {
    const fundo = {backgroundColor: props.corSecundaria}
    const borda = {borderColor: props.corPrimaria}
    
    return(
        
        (props.teammates.length > 0) ? <section className='time' style={fundo}>
         <h3 style={borda} >{props.nome}</h3>
         <div className='colaboradores' >
        {props.teammates.map(teammates => <Colaborador corDeFundo={props.corPrimaria} key={teammates.nome} nome={teammates.nome} funcao={teammates.funcao} imagem={teammates.imagem} /> )}
         </div>
        </section>
        : ''
    )
    

}


export default Time