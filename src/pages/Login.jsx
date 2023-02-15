import React from 'react'
import MyButton from '../components/UI/buttons/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useContext } from 'react';
import { AuthContext } from '../context';

    const Login = () => {
        const {isAuth, setIsAuth} = useContext(AuthContext);

        const login = event => {
            event.preventDefault();
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
        }

    return (
        <div style={{margin: 'auto', marginTop: '5%'}}>
        <h1>
            Login page
        </h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="login"/>
            <MyInput type="password" placeholder="password"/>
            <MyButton>Enter</MyButton>
        </form>
        </div>
    )
    }

export default Login
