import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS, RESET } from './actions';

let initialState = {
    favorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        
        case ADD_FAV:
            console.log('state')
            console.log('payload: ', action.payload)
            return {
                ...state,
                favorites: action.payload,
                allCharacters: action.payload,
            }
            
        case REMOVE_FAV:
            return { ...state, favorites: action.payload };
            
        case ORDER_CARDS:
            return {
                ...state,
                favorites: state.allCharacters.filter(character => character.gender === action.payload)
        }
        case FILTER_CARDS: 
        let order = state.allCharacters.sort((a, b)=>{
            if (action.payload ==="A"){
                if (a>b) return 1
                if (a<b) return -1
                return 0
            } else {
                if (a>b) return -1
                if (a<b) return 1
                return 0
            }
        })
        return{
            ...state,
            favorites: order
        }
        case RESET: 
        return {...state, }
        default: return state
    }
}

export default rootReducer