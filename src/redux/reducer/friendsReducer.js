const initialState = {
    friends: [],
    loading: false,
    error: null
}


export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'get_friends': {
            return {
                ...state,
                friends: action.payload,
                loading: false
            }
        }
        case 'loading':
            return {
                ...state,
                loading: true
            }
        case 'error':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loadFriends = () => {
    return async (dispatch) => {
        dispatch({
            type: 'loading'
        })
        try {
            const response = await fetch('https://reqres.in/api/users/')
            const json = await response.json();
            const friends = (json.data);
            dispatch({
                type: 'get_friends',
                payload: friends
            })
        } catch (e) {
            dispatch({
                type: 'error',
                payload: e.message
            })
        }
    }
}
