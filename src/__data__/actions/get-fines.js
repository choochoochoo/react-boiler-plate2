import axios from 'axios'
import _ from 'lodash'

import {
    GET_FINES_COMPLETED,
    GET_FINES_FAILED,
    GET_FINES_STARTED,
} from '../action-types'
import { getMapiUrl } from '../../utils/url'

const URL = '/private/payments/debts/list.do'

export const getFinesPure = (param, dispatch) => {
    dispatch({ type: GET_FINES_STARTED })

    axios
        .post(`${getMapiUrl()}${URL}`, {}, {
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

