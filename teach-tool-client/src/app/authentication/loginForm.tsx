type LoginFormProps = {
    onInputChange : (inputName: string, inputValue: string) => void,
}

const LoginForm : React.FC<LoginFormProps> = ({ onInputChange }) => {

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(e.target.name, e.target.value)
    }

    return(
        <>
            <input type="text" name="login" className="form-control mb-2" placeholder="Login" onChange={inputChangeHandler} />
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={inputChangeHandler} />
        </>
    )
}

export default LoginForm