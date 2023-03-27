import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './views/App'

import DataContext, {data} from './data/DataContex'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)