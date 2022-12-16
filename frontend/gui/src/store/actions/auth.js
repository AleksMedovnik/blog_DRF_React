import * as actionTypes from './actionTypes'
import axios from 'axios';


export const authStart = () => ({ type: actionTypes.AUTH_START })
export const authSuccess = token => ({ type: actionTypes.AUTH_SUCCESS, token })
export const authFail = error => ({ type: actionTypes.AUTH_FAIL, error })

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/auth/token/login/', {
            username,
            password
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}