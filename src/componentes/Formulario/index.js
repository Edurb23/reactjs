import CampoEscolha from '../CampoEscolha'
import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o seu card de jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto label="Skill" placeholder="Digite sua skill..." />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem..." />
                <CampoEscolha label="Posição" />
            </form>
        </section>
    )


}

export default Formulario