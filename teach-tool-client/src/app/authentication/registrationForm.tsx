type RegistrationFormProps = {
    onInputChange: (inputName: string, inputValue: string) => void,
}

const RegistrationForm : React.FC<RegistrationFormProps> = ({ onInputChange }) => {

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(e.target.name, e.target.value)
     };

    return(
        <>
            <input type="text" name="firstName" className="form-control mb-2" onChange={inputChangeHandler} placeholder="First name" />
            <input type="text" name="lastName" className="form-control mb-2" onChange={inputChangeHandler} placeholder="Last name" />
            <input type="text" name="middleName" className="form-control mb-2" onChange={inputChangeHandler} placeholder="Middle name" />
            <input type="email" name="email" className="form-control mb-2"  onChange={inputChangeHandler} placeholder="Email" />
            <input type="text" name="login" className="form-control mb-2" onChange={inputChangeHandler} placeholder="Login" />
            <input type="password" name="password" className="form-control mb-2" onChange={inputChangeHandler} placeholder="Password" />
            <input type="password" name="confirmPassword" className="form-control" onChange={inputChangeHandler} placeholder="Confirm password" />
        </>
    )
}

export default RegistrationForm