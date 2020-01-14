import axios from 'axios'
import _ from 'lodash'

import {
    GET_FINES_COMPLETED,
    GET_FINES_FAILED,
    GET_FINES_STARTED,
} from '../action-types'
import config from '../../../config.json'

const URL = '/api/fines'

export const getFinesPure = (param, dispatch) => {
    dispatch({ type: GET_FINES_STARTED })

    axios
        .get(`${config.host}${URL}`, {}, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            dispatch({
                type: GET_FINES_COMPLETED,
                payload: _.get(response, 'data.response', {})
            })
        })
        .catch((e) => {
            dispatch({ type: GET_FINES_FAILED, e })
        })
}

export const getFines = (param) => (dispatch) => getFinesPure(param, dispatch)

