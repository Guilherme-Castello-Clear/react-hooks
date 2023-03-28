import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'


const initialState = {
    cart: [],
    user: null,
    products: [],
    number: 0
}



function reducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.payload}}
        case 'addN':
            return {...state, number: state.number + parseInt(action.payload)}
        case 'multi7':
            return {...state, number: state.number * 7}
        case 'div25':
            return {...state, number: state.number / 25}
        case 'round':
            return {...state, number: Math.round(state.number)}

        default:
            return state
    }
}

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
                    <button className="btn" onClick={()=> dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn" onClick={()=> dispatch({type: 'login', payload: 'Maria'})}>Logar</button>
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
