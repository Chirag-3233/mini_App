import { ADD_FAVORITE_ITEM, GET_LIST, REMOVE_FAVORITE_ITEM } from "./action";

const initialState = {
    getList: [],
    favorites: [],
};
function favouriteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return { ...state, getList: action.payload };
        case ADD_FAVORITE_ITEM:
            return { ...state, favorites: [...state.favorites, action.payload] };
        case REMOVE_FAVORITE_ITEM:
            return {
                ...state,
                favorites: state.favorites.filter(
                    getList => getList.char_id !== action.payload.char_id,
                ),
            };
        default:
            return state;
    }
}
export default favouriteReducer;