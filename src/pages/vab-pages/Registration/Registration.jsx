
import { useState } from "react";
import "./Registration.scss"
import { createUser } from "../../../platform/api/users-api";
import { useNavigate } from "react-router-dom";
const Registration = () => {

    const [loading, setLoading] = useState(false)
    const [regFormData, setRegFormData] = useState ({
        email: '',
        password: '',
        confirmPassword: '',
    })



    const handleChange = (e) => {
        setRegFormData({...regFormData, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate()
    const handleClick = async () => {

        if(!loading && regFormData.email && regFormData.password && regFormData.confirmPassword && regFormData.password === regFormData.confirmPassword) {
            setLoading(true)
            const result = await createUser(regFormData)
            if(result) {
                setRegFormData({
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                setLoading(false)
                navigate('/Login');
            }
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
                    <input 
                        className="register-input" 
                        type="password" 
                        placeholder="Create a password"
                        onChange={handleChange}
                        name={'password'}
                        value={regFormData.password}
                    />
                    <input 
                        className="register-input" 
                        type="password" 
                        placeholder="Confirm your password" 
                        onChange={handleChange}
                        name={'confirmPassword'}
                        value={regFormData.confirmPassword}
                    />
                </div>
                <button onClick={handleClick} className="register-btn">{loading ? 'loading....' : 'Registration'}</button>
            </div>
        </div>

    )
}

export default Registration;