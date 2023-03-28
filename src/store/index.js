import reducer from './reducers/'
import { numberAdd2 } from './actions/number'

const initialState = {
    cart: [],
    user: null,
    products: [],
    number: 0
}

export{
    reducer,
    initialState,
    numberAdd2
}
