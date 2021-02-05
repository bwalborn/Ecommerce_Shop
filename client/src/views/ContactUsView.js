import React, {useState, useEffect} from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../actions/messageActions'
import { MESSAGE_CREATE_RESET } from '../constants/messageConstants';




const ContactUsView = () => {

    const dispatch = useDispatch();

    const messageCreate = useSelector(state => state.messageCreate);
    const { loading, error, success, messageInfo } = messageCreate;

    const [messageAlert, setMessageAlert] = useState(null);
    // const [formInformation, setFormInformation] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(null);

    
    // // function of functions ()=>()=>

    const requiredLetterCount = (val) => val && val.length > 2 && val.length <= 20 ? undefined : 'Required';
    const requiredEmail = (val) => val &&  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val) ? undefined : 'Required';
    const requiredMinMaxLength = (val) => val && val.length >= 5 && val.length <= 350 ? undefined : 'Required';
    

    const handleChange = () => {

    }
    
    const showResults = async ({firstName, lastName, email, messageBody}) => {        
        if (firstName !== undefined && lastName !== undefined && email !== undefined && messageBody !== undefined) {
                    dispatch(createMessage(firstName, lastName, email, messageBody))
                    // if (success) {
                    //     setFormSubmitted('Success - Form submitted')
                    // } 
                    // if (error) {
                    //     setMessageAlert('Invalid - Form must be submitted properly')
                    // }
                } 
            }
        

        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        useEffect( async () => {
            dispatch({ type: MESSAGE_CREATE_RESET });
            if (success) {
                setFormSubmitted('Success - Form submitted')
            } 
            if (error) {
                setMessageAlert('Invalid - Form must be submitted properly')
            }
                await sleep(4000);
                setFormSubmitted(null)
                setMessageAlert(null)
                
            },[ success, error ])

    return (
       <FormContainer > 
            <h3 className='title'>Contact Us</h3>
            {messageAlert && <Message variant='danger'>{messageAlert}</Message>}
            {/* {success === true ? (formSubmitted && <Message variant='success'>{formSubmitted}</Message>) : error !== undefined ? (messageAlert && <Message variant='danger'>{messageAlert}</Message>) : null} */}
            {/* {messageAlert !== null ? (messageAlert && <Message variant='danger'>{messageAlert}</Message>) : (formSubmitted && <Message variant='success'>{formSubmitted}</Message>)} */}
            {formSubmitted && <Message variant='success'>{formSubmitted}</Message>}
           {/* {error && <Message variant='danger'>{error}</Message>} */}
            {loading && <Loader />}


            
            <Form onSubmit={showResults} subscription={{ submitting: true }} >
            {({handleSubmit, values, submitting, form, reset}) => ( 
                <form onSubmit={(event) => { const promise = handleSubmit(event); promise && promise.then(() => { form.reset(); }); return promise; }} >
                    <Field name='firstName' className='field-input' placeholder='Enter first name' validate={requiredLetterCount} subscription={{ value: true, error: true, touched: true, active: true }} >
                            {({input, meta, placeholder}) => (
                                <div className={meta.active ? 'active' : ''}>
                                    <label style={{ verticalAlign: 'top', paddingRight: '1em', display: 'block'}}>First Name</label>
                                    <input {...input} placeholder={placeholder} style={{ width: '80%', overflow: 'hide' , padding: '0.5em', borderColor: 'lightgrey', borderRadius: '2%' }} />
                                    {meta.error && meta.touched && <span style={{padding: '1em', color: 'red'}}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name='lastName' placeholder='Enter last name' validate={requiredLetterCount} subscription={{ value: true, error: true, touched: true, active: true }} >
                            {({input, meta, placeholder}) => (
                                <div className={meta.active ? 'active' : ''}>
                                    <label style={{paddingTop: '2em', verticalAlign: 'top', paddingRight: '1em', display: 'block'}}>Last Name</label>
                                    <input {...input}  placeholder={placeholder} style={{width: '80%', padding: '0.5em',  borderColor: 'lightgrey', borderRadius: '2%' }} />
                                    {meta.error && meta.touched && <span style={{padding: '1em', color: 'red'}}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name='email' placeholder='Enter email' validate={requiredEmail} default='' subscription={{ value: true, error: true, touched: true, active: true }} >
                            {({input, meta, placeholder}) => (
                                <div className={meta.active ? 'active' : ''}>
                                    <label style={{ paddingTop: '2em', verticalAlign: 'top', paddingRight: '1em', display: 'block'}}>Email</label>
                                    <input {...input} placeholder={placeholder} style={{width: '80%', height: '3rem', padding: '0.5em', borderColor: 'lightgrey', borderRadius: '2%' }} />
                                    {meta.error && meta.touched && <span style={{padding: '1em', verticalAlign: 'top', color: 'red'}}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name='messageBody'  placeholder='Enter message' validate={requiredMinMaxLength} subscription={{ value: true, error: true, touched: true, active: true }} >
                            {({input, meta, placeholder}) => (
                                <div className={meta.active ? 'active' : ''} style={{alignContent: 'center'}} >
                                    <label style={{ paddingTop: '2em',verticalAlign: 'top', paddingRight: '1em', display: 'block'}}>Message</label>
                                    <textarea {...input} placeholder={placeholder} className="textarea"  rows={6} style={{width: '80%', padding: '0.5em' , borderColor: 'lightgrey', borderRadius: '2%'}}  />
                                    {meta.error && meta.touched && <span style={{ padding: '1em', verticalAlign: 'top', color: 'red'}}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                <Button type='submit' style={{margin: '2rem 0', width: '8rem'}} disabled={submitting} >Submit</Button>
                {/* <FormSpy subscription={{values:true}}>{({values}) => <pre>{JSON.stringify(values)}</pre>}</FormSpy>     */}
            </form>
            )}
            </Form>
        
              <div className="align-self-center">
                        <h5 className="text-center" style={{margin: '1rem'}}> Follow us for more content</h5>

                            <div className="text-center" >
                                <a  className="btn" href="http://www.linkedin.com/in/bryce-walborn"><i class="fab fa-linkedin fa-3x" style={{color: '#2867B2'}}></i></a>
                                <a className="btn" href="https://github.com/bwalborn"><i class="fab fa-github-square fa-3x"></i></a>
                                <a className="btn" href="https://www.instagram.com/brycewalbornceramics/" ><i class="fab fa-instagram-square fa-3x" style={{color:'#E14184'}}></i></a>
                                {/* <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a> */}
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope fa-3x" ></i></a>
                            </div>
                            </div>
            </FormContainer>

    );
}



export default ContactUsView;