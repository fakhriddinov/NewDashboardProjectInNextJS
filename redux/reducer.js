import { SET_ALBUMS, SET_PHOTOS, SET_TODOS, SET_USERS } from "./type";

const initialState = {
    users: [],
    todos: [],
    albums: [],
    photos: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        case SET_TODOS:
            return { ...state, todos: action.payload };

        case SET_ALBUMS:
            return { ...state, albums: action.payload };

        case SET_PHOTOS:
            return { ...state, photos: action.payload }

        default: return state;
    }
}

export default reducer;