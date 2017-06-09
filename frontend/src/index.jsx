import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

//Integração com o plugin Redux do Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools) //aplicação do middleware esperando a promise ser resolvida
//const store = createStore(reducers, devTools) //sem middleware

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)