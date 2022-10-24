function validar(){
    var nombre, apellido, correo, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre=== "" || apellido=== "" ||correo=== "" ||telefono=== ""){
        alert ("Todos los campos son obligatorios")
        return false;
    } else if (isNaN(telefono)){
        alert("El teléfono ingresado no es un numero")
        return false    
    }else if(telefono.length>10){
        alert("El teléfono no puede tener mas de 10 digitos");
        return false
    }else if(!expresion.test(correo)){
        alert("El correo no es válido");
        return false
    }

}

