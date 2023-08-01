
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {

    const times = [
        'Couter-Striker',
        'Valorant',
        'League of Legend',
        'Rocket League',
        'Rainbow Six Siege',
        'Warzone',
        'Overwatch',


        
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi subimetivos')
    } 
   
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu card de jogador</h2>
                <CampoTexto obrigatorio = {true}  label="Nome/Apelido" placeholder="Digite seu nome..." />
                <CampoTexto obrigatorio = {true} label="Função" placeholder="Digite sua Função..." />
                <CampoTexto obrigatorio = {true}label="Imagem" placeholder="Digite o endereço da imagem..." />
                <ListaSuspensa obrigatorio = {true} label = "Time" itens={times}/>
                <Botao texto = "Criar Card"/>
            </form>
        </section>
    )


}

export default Formulario