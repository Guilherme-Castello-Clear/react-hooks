export default function reducer(state, action){
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