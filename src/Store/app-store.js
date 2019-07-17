import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allreducers from './reducers/app-reducer'


const store = createStore(
    allreducers,
    {},
    applyMiddleware(thunk)
)

export default store