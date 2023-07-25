import './CampoEscolha.css'

const CampoEscolha = (props) => {
    //jsx



    return(
        <div className="campo-escolha">
            <label>
                {props.label}
                </label>
                <select>
                    <option>Fixo</option>
                    <option>Ala</option>
                    <option>Pivô</option>
                    <option>Goleiro Linha</option>
                    <option>Goleiro</option>

                
                </select>
            
        </div>
    )
}

export default CampoEscolha