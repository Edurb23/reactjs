import './listaSuspensa.css'


const ListaSuspensa = (props) => {
   
   
    return (
        <div className='Lista_Suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(iten => {
                    return <option key={iten}>{iten}</option>
                })}
            </select>
        </div>
    )
    
    
}


export default ListaSuspensa
