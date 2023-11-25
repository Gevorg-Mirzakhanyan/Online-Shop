import { Link } from "react-router-dom";
import "./Login.scss"
import { useState } from "react";
import { getUsers } from "../../../platform/api/users-api";
const Login = () => {

    const [loading, setLoading] = useState(false)
    const [logFormData, setLogFormData] = useState ({
        email: '',
        password: '',
    })
    
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    // const [loginError, setLoginError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    // const handleLoginChange = (e) => {
    //     setLogin(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    
    const handleChangeLogin = (e) => {
        setLogFormData({...logFormData, [e.target.name]:e.target.value})
    }

    //     const handleClick = () => {
    //     setLoginError('');
    //     setPasswordError('');

    //     if (login.trim() === '') {
    //         setLoginError('Login is required.');
    //         return;
    //     }

    //     if (password.trim() === '') {
    //         setPasswordError('Password is required.');
    //         return;
    //     }

    //     const loginData = { login, password };
    //     localStorage.setItem('loginData', JSON.stringify(loginData));
    //     window.location.reload();
    // }

    const loginUser = async () => {
        const result = await getUsers()
        if(result && result.data.length) {
            const user = result.data.find(item => item.email === logFormData.email && item.password === logFormData.password)
            if(user) {
                localStorage.setItem('token', user._id)
                window.location.reload()
            }
        }
    }

    return(
        <div className="G-center">
            <div className="login">
                <div className="login-register G-center  G-flex-column">
                    <h1>Login</h1>
                    <input 
                        className="login-input" 
                        type="email" 
                        placeholder="Enter your email " 
                        onChange={handleChangeLogin}
                        name="email"
                        value={logFormData.email}
                    />
                    {/* {loginError && <div>{loginError}</div>} */}
                    <input 
                        className="login-input" 
                        type="password" 
                        placeholder="Enter your password" 
                        onChange={handleChangeLogin}
                        name="password"
                    />
                    {/* {passwordError && <div>{passwordError}</div>} */}
                </div>
                <Link className="login-link">
                    <p>Forgot password?</p>
                </Link>
                <button onClick={loginUser} className="login-btn">Login</button>
            </div>
            
        </div>

    )
}

export default Login;