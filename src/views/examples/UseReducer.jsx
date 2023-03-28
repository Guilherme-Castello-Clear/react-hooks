import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store'
import { numberAdd2, login } from '../../store/actions'

function getN(){
    return document.getElementById('entrance').value;
}

const UseReducer = (props) => {

    const [nEntrance, setEntrance] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                
                {state.user ? 
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuarios conectados</span>
                }
                <input type="text" value={nEntrance} id='entrance' onChange={e => setEntrance(e.target.value)} className="input" />
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={()=> numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={()=> login(dispatch, 'Lucia')}>Logar</button>
                    <button className="btn" onClick={()=> dispatch({type: 'multi7'})}>*7</button>
                    <button className="btn" onClick={()=> dispatch({type: 'addN', payload: getN()})}>AddN</button>
                    <button className="btn" onClick={()=> dispatch({type: 'div25'})}>/25</button>
                    <button className="btn" onClick={()=> dispatch({type: 'round'})}>Round</button>

                </div>
            </div>
        </div>
    )
}

export default UseReducer
