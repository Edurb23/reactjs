
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    const times = [
        'Couter-Striker',
        'Valorant',
        'League of Legend',
        'Rocket League',
        'Rainbow Six Siege',
        'Warzone',
        'Overwatch',


        
    ]

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
       props.aoTeammateCadastrado({
        nome,
        funcao,
        imagem,
        time
       })
    } 
   
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu card de jogador</h2>
                <CampoTexto 
                obrigatorio = {true}  
                label="Nome/Apelido" 
                placeholder="Digite seu nome..." 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio = {true} 
                label="Função" 
                placeholder="Digite sua Função..." 
                valor={funcao}
                aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto obrigatorio = 
                {true}label="Imagem" 
                placeholder="Digite o endereço da imagem..." 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio = {true} 
                label = "Time" 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao texto = "Criar Card"/>
            </form>
        </section>
    )


}

export default Formulario