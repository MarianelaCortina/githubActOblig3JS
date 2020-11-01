function validarDatos(form) {
    let email = form.email.value;
    let clave = form.clave.value;
    console.log("email y clave: " + email + clave);
    if (email == "" || email.indexOf('@', 0) == -1 || clave == "") {
        alert("Los campos no pueden estar vacíos y el email debe contener un @");
        return (false);
    } else {
        alert("Campos correctos");
        return (true);
    }  
}
