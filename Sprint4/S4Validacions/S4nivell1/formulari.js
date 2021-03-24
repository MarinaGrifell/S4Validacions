function controlCerca(){
var valorCerca = document.getElementById('cerca');

if((valorCerca.value == "") || (valorCerca.value.length<3) ) {
    valorCerca.classList.add("is-invalid");
    document.getElementById("errorCerca").textContent = "Cerca no valida";
} else {
    valorCerca.classList.remove("is-invalid");
    document.getElementById("errorCerca").textContent = "";

}
}

function validaLogin() {
    var acumErrores = 0;


	var inputPassword = document.forms["loginForm"]["password"];
	var inputEmail = document.forms["loginForm"]["email"];



    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}


    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Password es requerido";
		acumErrores ++;
	}


    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}

}

function validaRegistre() {
    var acumErrores = 0;


	var inputPassword = document.forms["registerFormId"]["password"];
	var inputEmail = document.forms["registerFormId"]["emailRegister"];
	var inputName = document.forms["registerFormId"]["name"];



    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailRegister").textContent = "Es campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailRegister").textContent = "El email no cumple el formato";
		acumErrores ++;
	}


    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPasswordRegister").textContent = "Password es necesario";
		acumErrores ++;
	}

    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = " El nombre es necesario";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}

}



function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
