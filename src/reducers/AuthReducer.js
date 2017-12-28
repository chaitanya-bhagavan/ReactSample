import {
    EMAIL_CHANGED ,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_2FA,
    LOGIN_2FA,
    LOGIN_2FA_SUCCESS,
    LOGIN_2FA_FAIL,
    NAME_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    SIGNUP_USER,    
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    PASSWORD_CHANGED_FUNCTION,
    PASSWORD_CHANGED_SUCCESS,
    PASSWORD_CHANGED_FAIL
} from '../actions/types'


const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: '',
    passwordMatchError: '',
    name: '',
    confirmPassword: '',
    jwt:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED :
            return { ...state, email:action.payload };
        case PASSWORD_CHANGED : 
            return { ...state, password:action.payload };
        case NAME_CHANGED : 
            return {...state, name: action.payload };
        case CONFIRM_PASSWORD_CHANGED :
            return {...state, confirmPassword: action.payload, passwordMatchError: 'Password does not match'};
        case LOGIN_USER : 
            return {...state, error: '', loading: true};
        case LOGIN_USER_SUCCESS :
            return {...state,...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_ERROR :
        return {...state, error: action.payload , password: '', email: '', loading: false };
        case LOGIN_USER_2FA :
        return {...state, loading: false };
        case LOGIN_2FA_FAIL :
        return {...state, loading: false, error: action.payload };
        case SIGNUP_USER :
            return {...state, loading: true , error: ''}; 
        case SIGNUP_USER_SUCCESS :
            return {...state,...INITIAL_STATE, loading: false};
        case SIGNUP_USER_FAIL :
            return {...state, error: action.payload, loading: false};
        case PASSWORD_CHANGED_FUNCTION : 
        return {...state, loading: true }
        case PASSWORD_CHANGED_SUCCESS: 
        return {...state, loading: false, jwt: action.payload}
        case PASSWORD_CHANGED_FAIL :
        return {...state,error: 'Authentication Failed', loading: false}
        default: 
         return state;
    }
}