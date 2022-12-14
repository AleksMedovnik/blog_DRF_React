import * as actionTypes from './actionTypes'
import axios from 'axios';


export const authStart = () => ({ type: actionTypes.AUTH_START })
export const authSuccess = token => ({ type: actionTypes.AUTH_SUCCESS, token })
export const authFail = error => ({ type: actionTypes.AUTH_FAIL, error })

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const authLogin = (userName, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/auth/token/login/', {
            userName,
            password
        })
            .then(response => {
                const token = response.data.key
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', token)
                localStorage.setItem('expirationDate', expirationDate)
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout(3600))
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}


export const authSignUp = (userName, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/auth/token/registration/', {
            userName,
            email,
            password1,
            password2
        })
            .then(response => {
                const token = response.data.key
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', token)
                localStorage.setItem('expirationDate', expirationDate)
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout(3600))
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}