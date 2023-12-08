'use client'

import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
};

const enum AuthType {
    Login = 1,
    Registration = 2,
}

type RegistrationProps = {
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    login: string,
    password: string,
}

type LoginProps = { 
    login: string,
    password: string
}

const AuthenticationPage : React.FC = () => {
    const [authType, setAuthType] = useState<AuthType>(AuthType.Login);
    const [registrationState, setRegState] = useState<RegistrationProps>({
        email: '',
        firstName: '',
        lastName: '',
        login: '',
        middleName: '',
        password: '',
    })
    const [loginState, setLoginState] = useState<LoginProps>({
        login: '',
        password: ''
    })

    const toggleAuthenticationType = () => {
        setAuthType(authType === AuthType.Login ? AuthType.Registration : AuthType.Login);
    }

    // const handleAuthentication = async (authType: AuthType) => {
    //     let requestData = JSON.stringify({ 
    //         FirstName: "Nik",
    //         LastName: "Faraday",
    //         MiddleName: "Serhiyovish",
    //         Birthday: "23.05.2023",
    //         Email: "nikgusachenko@gmail.com",
    //         Phone: "380674906517",
    //         Login: "NHusachenko",
    //         Password: "1111",
    //     })
    //     console.log(requestData);
    //     let response = await fetch('https://localhost:7155/api/Authentication/SignUp', {
    //         method: 'post',
    //         headers: {
    //             'Accept': '*/*',
    //             'Host': "http://localhost:3000",
    //             'Content-Type': 'application/json;'
    //         },
    //         body: requestData
    //     })

    //     let data = await response.json();
    //     console.log(data)
    // }

    // const testPostAction = async () => {
    //     let headers = new Headers({
    //         "Accept": "*/*",
    //         "Host": "http://localhost:3000",
    //         'Content-Type': 'application/json',
    //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5OTNmMWMwLWVkMmItNDZmNi04N2E5LTZlNWQ0N2YyNTE0NCIsImZpcnN0IG5hbWUiOiJOaWsiLCJsYXN0IG5hbWUiOiJGYXJhZGF5IiwibWlkZGxlIG5hbWUiOiJTZXJoaXlvdmlzaCIsImVtYWlsIjoibmlrZ3VzYWNoZW5rb0BnbWFpbC5jb20iLCJsb2dpbiI6Ik5IdXNhY2hlbmtvIiwicGhvbmUiOiIzODA2NzQ5MDY1MTciLCJleHAiOjE3MDEyOTk1NzJ9.ZdcYiF3MMPpm9LSQxePCh3cUcbHWy9wK0jf9j_4p-2U",
    //         "Authorization": "Bearer " + localstorage.getItem('token'),
    //     })

    //     let response = await fetch('https://localhost:7155/api/test/testaction', {
    //         headers: headers,
    //     })
    //     console.log(response)

    //     let data = await response.json()
    //     console.log(data)
    // }

    const signInHandler = async () => {
        location.href = '/'
        // let dataObj = {
        //     FirstName: "My first name",
        //     LastName: "my last name"
        // }
        // console.log(dataObj)

        // let requestData = JSON.stringify(dataObj)
        // console.log(requestData)

        // localStorage.setItem('token', 'ThisIsValue')

        // let response = await fetch('https:/localhost:7155/api/Authentication/SignUp', {
        //     method: 'post',
        //     headers: {
        //         "Accept": "*/*",
        //         "Host": "http://localhost:3000",
        //         'Content-Type': 'application/json',
        //     },
        //     body: requestData,
        // })
        // console.log(response)

        // let data = await response.json()
        // console.log(data)
    }

    return (
        <Flex style={boxStyle} justify={'center'} align={'center'}>
            <div className='card' style={{width: '50%'}}>
                <div className='card-header'>
                    <Flex justify={'space-between'} align={'center'}>
                        <label>{authType == AuthType.Login ? 'Login' : 'Registration'}</label>
                        <input type='button' className='btn btn-success' value={'Change type'} onClick={() => toggleAuthenticationType() } />
                    </Flex>
                </div>
                <div className='card-body'>
                    { authType == AuthType.Login ? 
                        <LoginForm onInputChange={(inputName: string, inputValue: string) => setLoginState(state => ({...state, [inputName]: [inputValue]}))} /> : 
                        <RegistrationForm onInputChange={(inputName: string, inputValue: string) => { setRegState(state => ({ ...state, [inputName]: inputValue })) }} 
                        /> }
                </div>
                <div className='card-footer'>
                    <Flex align='center' justify='end'>
                        <input type='button' className='btn btn-success' value={authType === AuthType.Login ? 'Login' : 'Sign up'} onClick={() => { signInHandler() }} />
                    </Flex>
                </div>
            </div>
      </Flex>
    );
}

export default AuthenticationPage