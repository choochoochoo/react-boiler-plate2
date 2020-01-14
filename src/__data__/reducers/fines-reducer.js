import {
    GET_FINES_COMPLETED,
    GET_FINES_FAILED,
    GET_FINES_STARTED,
} from '../action-types'

const initialState = {
    responseFines: null,
}

export default function editSection (state = initialState, action) {
    switch (action.type) {
        case GET_FINES_COMPLETED:
            return {
                ...state,
                responseFines: action.payload,
            }
        default:
            return state
    }
}
