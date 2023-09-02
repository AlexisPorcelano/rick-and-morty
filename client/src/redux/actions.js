import axios from 'axios'

export const GET_FAV = 'GET_FAV'

export const ADD_FAV = 'ADD_FAV'

export const REMOVE_FAV = 'REMOVE_FAV'

export const FILTER_CARDS = 'FILTER_CARDS'

export const ORDER_CARDS = 'ORDER_CARDS'

export const RESET = 'RESET'



export const aFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/favorites';
    console.log(`entramos en la aFav con endpoint ${endpoint}`)
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, character);
            const {data} = response;
            console.log(`obtenemos la data:`, data);
            dispatch({
                type: 'ADD_FAV',
                payload: data,
            });

        } catch (error) {
            console.log(`ERROR ADDING FAVORITE: ${error.message}`);
        }
    };
};


export const rFav = (id) => {

    return async (dispatch) => {

        try {

            const {data} = await axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`);

            console.log('data', data)
            dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        } catch (error) {
            console.log(`ERROR DELETING FAVORITE: ${error.message}`);
        }
    };
}

export const fCards = (gender)=>{
    let action = {type: FILTER_CARDS, payload: gender}
    return action
}

export const oCards = (order)=>{
    let action = {type: ORDER_CARDS, payload: order}
    return action

}
