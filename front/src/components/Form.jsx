import { useState, useEffect } from 'react'
import validation from '../utils/validation'

const Form = ({handleLogin}) => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        setErrors(validation(userData))
    }, [userData])

    const handleState = event => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

        // setErrors(validation({
        //     ...userData,
        //     [event.target.name] : event.target.value
        // }))
    }

    const login = event => {
        event.preventDefault()
        if(!Object.keys(errors).length){
            handleLogin(userData)
        } else {
            alert('Hay campos con errores')
        }
    }

    return (
        <form onSubmit={login}>
            <label htmlFor="username">userName: </label>
            <input name="username" type="text" id="username" value={userData.username} onChange={handleState} />
            {errors.username && <p>{errors.username}</p>}
            
            <label htmlFor="password">password: </label>
            <input name="password" type="text" id="password" value={userData.password} onChange={handleState} />
            {errors.password && <p>{errors.password}</p>}

            <button type='submit'>LOGIN</button>
        </form>
    )
}

export default Form