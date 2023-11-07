const validation = userData => {
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    // /[\w\d]+@(gmail|hotmail|outlook)\.com(\.ar|\.col|\.br)*/
    
    if(!regexEmail.test(userData.username)) {
        errors.username = "Usuario invalido, debe ser un email valido"
    }

    if(userData.username.length > 35) {
        errors.username = "Supera la cantidad de caracteres permitidos"
    }

    if(!userData.username) {
        errors.username = "Campo obligatorio"
    }

    if(!userData.password.match(/\d/)) { // !/\d/.test(userData.password)
        errors.password = "Debe tener al menos un número"
    }

    if(userData.password.length < 6 || userData.password.length > 11) {
        errors.password = "Debe tener entre 6 y 11 caracteres"
    }

    if(!userData.password) {
        errors.password = "Campo obligatorio"
    }

    return errors
}

export default validation