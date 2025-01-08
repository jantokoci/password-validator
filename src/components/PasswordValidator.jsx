import { useState } from "react"
import validator from "validator"


function PasswordValidator() {

const [errorMessage, setErrorMessage] = useState('')
const [canSee, setCanSee] = useState(false)
const [randomPassword, setRandomPassword] = useState('')
const [passwordNeed, setPasswordNeed] = useState(false)

const validate = (value) => {
if (validator.isStrongPassword(value, {minLength: 8, minLowercase: 1, minUppercase: 2, minNumbers: 3, minSymbols: 1}))
    {setErrorMessage('Is Strong Password')}
else {setErrorMessage('Is not Strong Password')}
}

const letMeSee = () => {
    setCanSee(!canSee)
}

const handleRandomPassword = () => {
    let eredmeny = ''
    const bigChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    const smallChar = 'abcdefghijklmnopqrstuvwxyz'
    const numb = '0123456789'
    const symbol = '-.,?:;'
    
    let counter = 0;

        while (counter < 3) {
      eredmeny += numb.charAt(Math.floor(Math.random() * numb.length));
      counter += 1;
    }
    while (counter < 8) {
        eredmeny += smallChar.charAt(Math.floor(Math.random() * smallChar.length));
        counter += 1;
    }
    while (counter < 9) {
        eredmeny += symbol.charAt(Math.floor(Math.random() * symbol.length));
        counter += 1;
    }   
    while (counter < 12) {
        eredmeny += bigChar.charAt(Math.floor(Math.random() * bigChar.length));
        counter += 1;
    }
    setRandomPassword(eredmeny)
    setPasswordNeed(true)
    console.log(eredmeny)
    }

return(
    <div>
        <h1>Password Validator</h1>
            <label>Emter Your password: </label>
                <input type={(canSee ? "text" : "password")} onChange={(e) => validate(e.target.value)} value={passwordNeed ? randomPassword : null}/>

                <button onClick={letMeSee}>View!</button>

                <button onClick={handleRandomPassword}>Give me a Password!</button>

            <p className="password-criterium">Lenght need to be 8 character long, need 2 uppercase, 3 number, and 1 symbol!</p>
        {errorMessage == 'Is Strong Password' ?
        <p className="strong-password"><b>{errorMessage}</b></p> : <p className="weak-password"><b>{errorMessage}</b></p>}
    </div>
)
}

export default PasswordValidator