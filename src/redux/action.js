import axios from "axios";
import api from "../api/api";

export const GET_LIST = 'GET_LIST';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

export const getCharacterListAction = () => {
    try {
        return async dispatch => {
            const response = await axios.get(api.getList);
            if (response.data) {
                dispatch({
                    type: GET_LIST,
                    payload: response.data,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
    }
}


export const addFavorite = list => dispatch => {
    //add favourite
    dispatch({
        type: ADD_FAVORITE_ITEM,
        payload: list,
    });
};

export const removeFavorite = list => dispatch => {
    //remove favourite
    dispatch({
        type: REMOVE_FAVORITE_ITEM,
        payload: list,
    });
};