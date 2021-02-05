import React, { useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listMessages, deleteMessage } from '../actions/messageActions'
// import { listMessages, deleteMessage } from '../actions/messageActions'

// REMEMBER TO IMPORT INTO APP.JS

const MessageListView = ({ history }) => {
    const dispatch = useDispatch();

    const messageList = useSelector(state => state.messageList);
    const { loading, error, messages } = messageList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const messageDelete = useSelector(state => state.messageDelete);
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = messageDelete;

    useEffect(() => {
        if(userInfo && userInfo.isAdmin) {    // -> check if admin 
            dispatch(listMessages())             // -> change to message action (listMessages())
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [dispatch, history, userInfo, successDelete]) //successDelete

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
           dispatch(deleteMessage(id));   // -> deleteMessage(id)
        }
    }
    
    return (
        <>
        <h1>Messages</h1>

        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> 
        : (
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>MESSAGE</th>
                        {/* <th>DELETE</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr key={message._id}>
                            <td>{message._id}</td>
                            <td>{message.firstName}</td>
                            <td>{message.lastName}</td>
                            <td><a href={`mailto:${message.email}`}>{message.email}</a></td>
                            <td>{message.messageBody}</td>
                            <td>
                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(message._id)}>
                                    <i className='fas fa-trash'></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}
        </>
    )

}

export default MessageListView;