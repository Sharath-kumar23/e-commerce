import React, { useState} from 'react';
import FormValidator from './FormValidator';
const RegistrationForm = () =>{

   //    const passwordMatch = (confirmation:any, state:any)  => (state.password === confirmation)


    const validator = new FormValidator([{
        field: 'full_name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter full name.'
        }, {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your email address.'
        }, {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Enter valid email address.'
        }, {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter a phone number.'
        }, {
        field: 'phone',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: 'Enter valid phone number.'
        }, {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter password.'
        }, {
        field: 'password_confirmation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter Password confirmation.'
        }, {
        field: 'password_confirmation',
        method: "isEmpty", // notice that we are passing a custom function here
        validWhen: true,
        message: 'Password and password confirmation do not match.'
        }]);

        const handleInputChange = (event:any) => {
            event.preventDefault();
            updateState({...state,
            [event.target.name]: event.target.value,
            });
            }
   
        const [state,updateState] =useState({
            full_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            validation: validator.valid(),
            })
            let submitted = false;


            const handleFormSubmit = (event:any) => {
                event.preventDefault();
                const validation = validator.validate(state);
                updateState({
                    ...state,
                validation
                });
                submitted = true;
                if(validation.isValid) {
                //reaches here if form validates successfully...
                }
                }


let validation = submitted ? validator.validate(state) : state.validation
return (
<div className="container">
<div className="row">
<div className="col-md-4 col-md-offset-4">
<form className="registrationForm">
<h2>Registration form validation react js - Tutsmake.com</h2>
<div className={validation.email.isInvalid && 'has-error'}>
<label htmlFor="full_name">Full Name</label>
<input type="string" className="form-control" name="full_name" placeholder="Full Name" onChange={handleInputChange} /> <span className="help-block">{validation.full_name.message}</span> </div>
<div className={validation.email.isInvalid && 'has-error'}>
<label htmlFor="email">Email address</label>
<input type="email" className="form-control" name="email" placeholder="Email address" onChange={handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>
<div className={validation.phone.isInvalid && 'has-error'}>
<label htmlFor="phone">Phone(enter only 10 digit number)</label>
<input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
<div className={validation.password.isInvalid && 'has-error'}>
<label htmlFor="password">Password</label>
<input type="password" className="form-control" placeholder="Password" name="password" onChange={handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
<div className={validation.password_confirmation.isInvalid && 'has-error'}>
<label htmlFor="password_confirmation">Confirm Password</label>
<input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={handleInputChange} /> <span className="help-block">{validation.password_confirmation.message}</span> </div>
<button onClick={handleFormSubmit} className="btn btn-primary"> Register </button>
</form>
</div>
</div>
</div>
)
}

export default RegistrationForm;