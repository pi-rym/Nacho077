import { useState, useEffect } from 'react'
import validation from '../../utils/validation'
import {
    FormContainer,
    ContainerInput,
    Label,
    Input,
    ErrorText,
    Button
} from './styles'

const Form = ({handleLogin}) => {
    const [userData, setUserData] = useState({
        username: 'test@gmail.com',
        password: 'test321'
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
        <FormContainer onSubmit={login}>
            <ContainerInput>
                <Label htmlFor="username">userName: </Label>
                <Input name="username" type="text" id="username" value={userData.username} onChange={handleState} />
                {errors.username && <ErrorText>{errors.username}</ErrorText>}
            </ContainerInput>
            
            <ContainerInput>
                <Label htmlFor="password">password: </Label>
                <Input name="password" type="password" id="password" value={userData.password} onChange={handleState} />
                {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </ContainerInput>

            <Button type='submit'>LOGIN</Button>
        </FormContainer>
    )
}

export default Form