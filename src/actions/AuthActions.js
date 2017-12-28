import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    NAME_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    SIGNUP_USER,    
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    PASSWORD_CHANGED_FUNCTION,
    PASSWORD_CHANGED_SUCCESS,
    PASSWORD_CHANGED_FAIL,
    LOGIN_USER_2FA,
    LOGIN_2FA,
    LOGIN_2FA_SUCCESS,
    LOGIN_2FA_FAIL
} from './types';
import { AsyncStorage } from 'react-native';
import axios from 'axios';


//Whenever email changes this action will be  called and update the email prop in AuthReducer
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

//Whenever password changes this action will be  called and update the password prop in AuthReducer
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

//When User press Login This Action Will Be Called
export const loginUser = ({ email, password }) => {
    //dispatch function will be pass the type of action to the all the reducers ..>the dispatch is used for Async Functions
    return (dispatch) => {
    //dispatch Type of LOGIN_USER
    dispatch({
        type:LOGIN_USER
    });

     }  
    };
    
