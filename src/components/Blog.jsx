import React, { Component } from 'react'
import {useState} from 'react'



     function Blog(){
        const intialFormValues = {username:"", email:"", password:""};
        const [formValue, setFormValue] = useState(intialFormValues);
        const [formErros, setFormErrors] = useState();

        const handleChange = (e) =>{
            const {name, value} = e.target;
            setFormValue({...formValue, [name]:value});
            console.log(formValue);
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            setFormErrors(validateForm(formValue));
        }
     
        const validateForm = (value) =>{
            const errors = {};
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!value.username) {
                errors.username = 'username is required';
            }
            if (!value.email) {
                errors.email = 'email is required';

                } else if(!regex.test(value.email)){
                    errors.email = 'enter a valid email';
                }
            }
            if (!value.password) {
                errors.password = 'password is required';
            }else if (value.password < 4){
                errors.password = 'password must be more than 4 characters';
            }
            if (!value.password) {
                errors.password = 'password does not match';
            }
        }
         
        return (
            <div className='main-box'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1 className='text-primary'>sign Up page</h1>
                        </div>
                        <div>
                            <p>{formErros.username}</p>
                            <input onChange={handleChange} className='input-field' name='username' type="text" placeholder='enter your name' value={formValue.username} required/><br />
                            
                            <p>{formErros.email}</p>
                            <input onChange={handleChange} className='input-field' name='email' id='get-email' type="email" placeholder='enter your email' value={formValue.email} required/><br />
                            <input onChange={handleChange} className='input-field' name='password' type="password" placeholder='type password' value={formValue.password} required/><br />
                            <input onChange={handleChange} className='input-field' name='password' id='confirm-password' type="password" placeholder='confirm password' value={formValue.password} required/><br />

                            <button className='button'>sign up</button>
                            <div>
                                <p>Already have an account? <a href="#"> Login</a></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    

 
export default Blog;