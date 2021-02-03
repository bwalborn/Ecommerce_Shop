import React, {useState} from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
// import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Button } from 'react-bootstrap';

// import './ContactUsView.css'




const ContactUsView = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const dispatch = useDispatch();

    // const userLogin = useSelector(state => state.userLogin);
    // const { loading, error, userInfo } = userLogin;

    // const redirect = location.search ? location.search.split('=')[1] : '/';

    /// WILL GO IN SHOW RESULTS
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // DISPATCH LOGIN
    //     dispatch(login(email, password))
    // }







    // // function of functions ()=>()=>
    // const maxLength = (len) => (val) => !(val) || (val.length <= len);
    // const minLength = (len) => (val) => (val) && (val.length >= len);
    // const isNumber = (val) => !isNaN(Number(val));
    // const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    // const required = (val) => val ? undefined : 'Required';
    const requiredLetterCount = (val) => val && val.length > 2 && val.length <= 20 ? undefined : 'Required';
    const requiredEmail = (val) => val &&  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val) ? undefined : 'Required';
    const requiredMinMaxLength = (val) => val && val.length >= 5 && val.length <= 200 ? undefined : 'Required';
    
    
    const showResults = (values) => {        
            const formLayout =  ({
                firstName: values.firstName,
                lastName: values.lastName,
                emailAddress: values.emailAddress,  
                messageBody: values.messageBody,
            });
        
            const formValid = formLayout => {
                // let valid = true;
                let valid = false;
                Object.values(formLayout).forEach(val => { val.length > 0 && (valid = true)
                });
                return valid;
            };
            
        if (formValid(formLayout)) {
            // alert(JSON.stringify(values));
            const firstName = values.firstName
            const lastName = values.lastName
            const emailAddress = values.emailAddress 
            const messageBody = values.messageBody
            alert(JSON.stringify({firstName, lastName, emailAddress, messageBody}));
            // DISPATCH SEND MESSAGE
        } else {
            alert('Invalid - From must be submitted properly')
            // throw new Error('Invalid - From must be submitted properly')
        }
    }


    return (
       <FormContainer > 
            <h3 className='title'>Contact Us</h3>
           {/* {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}


            
            <Form onSubmit={showResults} subscription={{ submitting: true }} >
            {({handleSubmit, values, submitting}) => ( 
                <form onSubmit={handleSubmit} >
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
                                    <input {...input} placeholder={placeholder} style={{width: '80%', padding: '0.5em',  borderColor: 'lightgrey', borderRadius: '2%' }} />
                                    {meta.error && meta.touched && <span style={{padding: '1em', color: 'red'}}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name='emailAddress' placeholder='Enter email' validate={requiredEmail} subscription={{ value: true, error: true, touched: true, active: true }} >
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
                <Button type='submit' style={{margin: '2rem 0', width: '8rem'}} disabled={submitting}>Submit</Button>
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