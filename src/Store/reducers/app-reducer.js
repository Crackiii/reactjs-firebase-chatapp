import { combineReducers } from 'redux'

const INITIAL_STATE = {}

const appReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SELECTED_PEOPLE':{
           return {
               ...action.payload
           }
        }
        case 'PROFILE_PIC_UPDATED':{
            console.log("REDUCER")
            return {
                img : action.payload
            }
        }
        case 'GET_CHAT_DATA':{
            console.log("REDUCER GET_CHAT_DATA")
            return{
                ...state,
                ...action.payload
            }
        }
        default : 
            return state
    }
}


export default combineReducers({
    appReducer : appReducer
})