import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'




export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

     function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
                return setError('Password donot match....');
        }
        const promises =[];
        setLoading(true);
        setError('');
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
    
        if(passwordRef.current.value !== currentUser.password){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            navigate('/');
        }).catch(()=>{
            setError('Failed to Update the account .....')
        }).finally(()=>{
            setLoading(false)
        })
    }

   
  return <div>
      <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
            
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required
                        defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} 
                        placeholder='Leave blank to keep it same'/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmationRef} 
                        placeholder='Leave blank to keep it same'/>
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type="submit"> Update Info</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <Link to="/">Cancel</Link>
        </div>
      </>
  </div>;
}
