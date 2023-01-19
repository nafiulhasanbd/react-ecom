
import {useState} from 'react';

const defaultFormField = {
    displayName :'',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormFields] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formField;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formField, [name]:value})

    };

    return(
        <div>
            <h1> Signup with your email and password</h1>

            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type='text' onChange={ handleChange } name='displayName' value={displayName} required />

                <label>Email</label>
                <input type='email' onChange={handleChange} name='email' value={email} required />

                <label>Password</label>
                <input type='password' onChange={handleChange} name='password' value={password} required />

                <label>Confirm Password</label>
                <input type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} required />

                <button type="submit"></button>
            </form>
        </div>
    )
}


export default SignUpForm;