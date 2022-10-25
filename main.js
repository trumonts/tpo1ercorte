

let form =document.getElementById("formulario");

function validar(){
    var nombre, apellido, correo, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    expresionCorreo = /\w+@\w+\.+[a-z]/;
    expresionNombre =/^[A-Z]+$/i;
    expresionTelefono = /^[0-9]*(\.?)[ 0-9]+$/;

    if (nombre=== "" || apellido=== "" ||correo=== "" ||telefono=== ""){
        alert ("Todos los campos son obligatorios")
        return false;
    } else if (isNaN(telefono)){
        alert("El teléfono ingresado no es un numero")
        return false    
    }else if(telefono.length>10){
        alert("El teléfono no puede tener mas de 10 digitos");
        return false
    } else if (!expresionNombre.test(nombre)){
        alert ("El nombre solo puede contener letras");
        return false
    } else if(!expresionNombre.test(apellido)){
        alert ("El apellido solo puede contener letras")
        return false
    } else if (!expresionTelefono.test(telefono)){
        alert ("El telefono solo puede contener numeros") 
        return false  
    }else if(!expresionCorreo.test(correo)){
        alert("El correo no es válido");
        return false
    }else{
        return true
    }
}
form.addEventListener("submit", (e)=>{
   if (validar()){
       form.reset();
    }
})






