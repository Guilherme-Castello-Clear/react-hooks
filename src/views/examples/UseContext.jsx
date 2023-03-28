import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContex'
import SectionTitle from '../../components/layout/SectionTitle.jsx'
import { AppContext } from '../../data/Store.jsx'
const UseContext = (props) => {

    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const { number, text, setNumber, setText } = useContext(AppContext)

    useEffect(function(){
        if(number>1250){
            setText('Eita!!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title='Exercicio 1'></SectionTitle>
            <div className="center">
                <span className='text'>{context.state.text}</span>
                <span className='text'>{context.state.number}</span>

            </div>
            <div>
                <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                <button className="btn" onClick={() => addNumber(1)}>+1</button>
            </div>
            <SectionTitle title='Exercicio 2'></SectionTitle>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={()=> setNumber(number-1)}>-1</button>
                    <button className="btn" onClick={()=> setNumber(number+1)}>+1</button>

                </div>
            </div>
        </div>
    )
}

export default UseContext
