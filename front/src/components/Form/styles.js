import styled from 'styled-components'

export const FormContainer = styled.form`
    color: white;
    background: #213547;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    border-radius: 8px;
`

export const ContainerInput = styled.div`
    width: 70%;
`

export const Label = styled.label`
`

export const Input = styled.input`
    width: 100%;
`

export const ErrorText = styled.p`
    color: red;
`

export const Button = styled.button`
    width: 30%; 
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
`
