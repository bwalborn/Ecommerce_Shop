import axios from 'axios';
import { MESSAGE_CREATE_FAIL, MESSAGE_CREATE_REQUEST, MESSAGE_CREATE_SUCCESS, MESSAGE_DELETE_FAIL, MESSAGE_DELETE_REQUEST, MESSAGE_DELETE_SUCCESS, MESSAGE_DETAILS_FAIL, MESSAGE_DETAILS_REQUEST, MESSAGE_DETAILS_SUCCESS, MESSAGE_LIST_FAIL, MESSAGE_LIST_REQUEST, MESSAGE_LIST_SUCCESS } from "../constants/messageConstants"



export const createMessage = (firstName, lastName, email, messageBody) => async (dispatch) => {
    try {
        dispatch({
            type: MESSAGE_CREATE_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/messages',
         { firstName, lastName, email, messageBody }, config);

         dispatch({
             type: MESSAGE_CREATE_SUCCESS,
             payload: data
         })

        //  localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: MESSAGE_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}



export const getMessageDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MESSAGE_DETAILS_REQUEST,
        })

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization :  `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.get(`/api/users/${id}`, config);

         dispatch({
             type: MESSAGE_DETAILS_SUCCESS,
             payload: data
         })

    } catch (error) {
        dispatch({
            type: MESSAGE_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}





export const listMessages = () => async (dispatch, getState) => {
    try {
        // DISPATCH THE REQUEST
        dispatch({
            type: MESSAGE_LIST_REQUEST,
        })
        
        // GET USERINFO
        const { userLogin: { userInfo } } = getState();

        // PASS IN OUR BEARER TOKEN
        const config = {
            headers: {
                // 'Content-Type': 'application/json',
                Authorization :  `Bearer ${userInfo.token}`,
            }
        }

        // UPDATING USER PROFILE USING PUT REQUEST HERE-> STORING IT IN 'data'
        // PASSING IN AS A SECOND ARGUMENT 'user' OBJECT FOR UPDATING
        const { data } = await axios.get(`/api/messages`, config);

         dispatch({
             type: MESSAGE_LIST_SUCCESS,
             payload: data
         })

    } catch (error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}




export const deleteMessage = (id) => async (dispatch, getState) => {
    try {
        // DISPATCH THE REQUEST
        dispatch({
            type: MESSAGE_DELETE_REQUEST,
        })
        
        // GET USERINFO
        // GET MESSAGEINFO
        const { userLogin: { userInfo } } = getState();

        // PASS IN OUR BEARER TOKEN
        const config = {
            headers: {
                // 'Content-Type': 'application/json',
                Authorization :  `Bearer ${userInfo.token}`,
            }
        }

        // DELETE USER PROFILE USING PUT REQUEST HERE-> STORING IT IN 'data'
         await axios.delete(`/api/messages/${id}`, config);

         dispatch({ type: MESSAGE_DELETE_SUCCESS })
    } catch (error) {
        dispatch({
            type: MESSAGE_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}