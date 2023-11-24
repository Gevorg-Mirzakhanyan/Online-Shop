
import { useState } from "react";
import "./Registration.scss"
const Registration = () => {

    const [loading, setLoading] = useState(false)
    const [regFormData, setRegFormData] = useState ({
        email: '',
        password: '',
        confirmPassword: '',
    })

    // const [loginError, setLoginError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        setRegFormData({...regFormData, [e.target.name]:e.target.value})
    }


    const handleClick = () => {
        // setLoginError('');
        // setPasswordError('');

        // if (regFormData.email.trim() === '') {
        //     setLoginError('Login is required.');
        //     return;
        // }

        // if (regFormData.password.trim() === '') {
        //     setPasswordError('Password is required.');
        //     return;
        // }

        // if (regFormData.confirmPassword.trim() === '' && regFormData.password !== regFormData.confirmPassword) {
        //     setPasswordError('Password is different.');
        //     return;
        // }
      
        if(!loading && regFormData.email && regFormData.password && regFormData.confirmPassword && regFormData.password === regFormData.confirmPassword) {
            fetch (`${process.env.REACT_APP_API_URL}/users`, {
                method: 'POST',
                body: JSON.stringify(regFormData),
                headers: {
                    'Content-Type' : 'appLication/json'
                }
            }).then(data => {
                if(data) {
                    setRegFormData ( {
                        email: '',
                        password: '',
                        confirmPassword: '',
                    })
                    setLoading(false)
                }
            })
        }
    }

    return(
        <div className="G-center">
            <div className="register">
                <div className="register-box G-center  G-flex-column">
                    <h1>Sign up</h1>
                    <input 
                        className="register-input" 
                        type="email" 
                        placeholder="Enter your email " 
                        onChange={handleChange}
                        name={'email'}
                        value={regFormData.email}
                    />
                     {/* {loginError && <div>{loginError}</div>} */}
                    <input 
                        className="register-input" 
                        type="password" 
                        placeholder="Create a password"
                        onChange={handleChange}
                        name={'password'}
                          value={regFormData.password}
                    />
                     {/* {passwordError && <div>{passwordError}</div>} */}
                    <input 
                        className="register-input" 
                        type="password" 
                        placeholder="Confirm your password" 
                        onChange={handleChange}
                        name={'confirmPassword'}
                          value={regFormData.confirmPassword}
                    />
                    {/* {passwordError && <div>{passwordError}</div>} */}
                </div>
                <button onClick={handleClick} className="register-btn">{loading ? 'Loading...' : 'Registration'}</button>
            </div>
        </div>

    )
}

export default Registration;