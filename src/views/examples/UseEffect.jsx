import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'




const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setParImpar] = useState('')
    const [value, setValue] = useState(0)


    function calcFatorial(num){

        const n = parseInt(num)
    
        if( n < 0 ) return -1
        if(n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial >= 100000){
            document.title = 'Eita!'
        }
    }, [fatorial])


    useEffect(function(){
        let flag
        if(value % 2 === 0) flag = 'Par'
        else flag = 'Impar' 
        setParImpar(flag)
    }, [value])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercicio 1'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => {setNumber(e.target.value)}}/>
            </div>
            <SectionTitle title='Desafio'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" value={value} onChange={e => setValue(e.target.value)}/>
            </div>

        </div>
    )
}



export default UseEffect
