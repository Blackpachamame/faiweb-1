function muestra_oculta(id) {
    var el = document.getElementById(id);
    if (el.style.display == 'none') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

/* FORMULARIO */

function verificaNombre() {
    var verifica = true;
    var nombre = document.getElementById("Nombres");
    if (nombre.value == "") {
        nombre.style.borderColor = "red";
        verifica = false;
    } else {
        var bandera = false;
        var longitud = nombre.value.length;
        var i = 0;
        while ((i < longitud) && !bandera) {
            if (!(isNaN(nombre.value[i]))) {
                nombre.style.borderColor = "red";
                verifica = false;
                bandera = true;
            } else {
                i++;
            }
        }
    }
    return verifica;
}

function verificaApellido() {
    var verifica = true;
    var apellido = document.getElementById("Apellidos");
    if (apellido.value == "") {
        apellido.style.borderColor = "red";
        verifica = false;
    } else {
        var bandera = false;
        var longitud = apellido.value.length;
        var i = 0;
        while ((i < longitud) && !bandera) {
            if (!(isNaN(apellido.value[i]))) {
                apellido.style.borderColor = "red";
                verifica = false;
                bandera = true;
            } else {
                i++;
            }
        }
    }
    return verifica;
}

function verificaDni() {
    var verifica = true;
    var dni = document.getElementById("DNI");
    if (dni.value == "" || isNaN(dni.value)) {
        dni.style.borderColor = "red";
        verifica = false;
    } else {
        if (dni.value < 0) {
            dni.style.borderColor = "red";
            verifica = false;
        }else if (dni.value.length != 8){
            dni.style.borderColor = "red";
            verifica = false;
        }
        /*if (!(/^\d{8}$/.test(dni.value))){
            dni.style.borderColor = "red";
            verifica = false;
        }*/
    }
    return verifica;
}

function verificaLegajo() {
    var verifica = true;
    var legajo = document.getElementById("Legajo");
    if (legajo.value == "") {
        legajo.style.borderColor = "red";
        verifica = false;
    }
    return verifica;
}

function verificaEmail() {
    var verifica = true;
    var valor = document.getElementById("Email").value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!(emailRegex.test(valor))) {
        document.getElementById("Email").style.borderColor = "red";
        verifica = false;
    }
    return verifica;
}

function verificaTipoTel() {
    var verifica = true;
    var indice = document.getElementById("TipoTel").selectedIndex;
    if (indice == null || indice <= 0) {
        document.getElementById("TipoTel").style.borderColor = "red";
        verifica = false;
    }
    return verifica;
}

function check() {
    var indice = document.getElementById("TipoTel").selectedIndex;
    if (indice == "1") {
        document.getElementById("telMovil").style.display = 'block';
        document.getElementById("telFijo").style.display = 'none';
    } else if (indice == "2") {
        document.getElementById("telMovil").style.display = 'none';
        document.getElementById("telFijo").style.display = 'block';
    } else {
        document.getElementById("telMovil").style.display = 'none';
        document.getElementById("telFijo").style.display = 'none';
    }
}

function verificaTel() {
    var verifica = true;
    var eleccion = document.getElementById("TipoTel").selectedIndex;
    if (eleccion == 1) {
        var valor = document.getElementById("TelefonoM").value;
        if (!(/^\d{9}$/.test(valor))) { //Permite solo 9 caracteres
            document.getElementById("TelefonoM").style.borderColor = "red";
            verifica = false;
        }
    } else {
        var valor = document.getElementById("TelefonoF").value;
        if (!(/^\d{7}$/.test(valor))) { //Permite solo 7 caracteres
            document.getElementById("TelefonoF").style.borderColor = "red";
            verifica = false;
        }
    }

    return verifica;
}

function verificarFecha() {
    var verifica = true;
    var dia = document.getElementById("Dia").selectedIndex;
    var mes = document.getElementById("Mes").selectedIndex;
    var año2 = document.getElementById("Año").selectedIndex;
    var año = document.getElementById("Año").value;
    if (dia > 0 || mes > 0 || año2 > 0) {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (dia == null || dia <= 0) {
                    document.getElementById("Dia").style.borderColor = "red";
                    verifica = false;
                }
                if (año == null || año <= 0) {
                    document.getElementById("Año").style.borderColor = "red";
                    verifica = false;
                }
                break;
            case 2:
                if (año == null || año <= 0) {
                    document.getElementById("Año").style.borderColor = "red";
                    verifica = false;
                }
                if (dia == null || dia <= 0) {
                    document.getElementById("Dia").style.borderColor = "red";
                    verifica = false;
                } else {
                    var bisiesto = esBisiesto(año);
                    if (bisiesto) {
                        if (dia > 29) {
                            document.getElementById("Dia").style.borderColor = "red";
                            verifica = false;
                        }
                    } else {
                        if (dia > 28) {
                            document.getElementById("Dia").style.borderColor = "red";
                            verifica = false;
                        }
                    }
                }
                break;
            default:
                if (dia == null || dia <= 0 || dia > 30) {
                    document.getElementById("Dia").style.borderColor = "red";
                    verifica = false;
                }
                if (mes == null || mes <= 0) {
                    document.getElementById("Mes").style.borderColor = "red";
                    verifica = false;
                }
                if (año == null || año <= 0) {
                    document.getElementById("Año").style.borderColor = "red";
                    verifica = false;
                }
        }
    }

    return verifica;
}

function esBisiesto(unAño) {
    return (((unAño % 4) == 0) && (!((unAño % 100) == 0) || ((unAño % 400) == 0)));
}

function registrar() {
    var veriNom, veriApe, veriDni, veriLegajo, veriEmail, veriTipoTel, veriTel, veriFecha;
    veriNom = verificaNombre();
    veriApe = verificaApellido();
    veriDni = verificaDni();
    veriLegajo = verificaLegajo();
    veriEmail = verificaEmail();
    veriTipoTel = verificaTipoTel();
    veriTel = verificaTel();
    veriFecha = verificarFecha();

    if (veriNom && veriApe && veriDni && veriLegajo && veriEmail && veriTipoTel && veriTel && veriFecha) {
        resetear();
        location.href = "ok.html";
    }
}

function resetear() {
    document.getElementById("Nombres").style.borderColor = "";
    document.getElementById("Apellidos").style.borderColor = "";
    document.getElementById("DNI").style.borderColor = "";
    document.getElementById("Legajo").style.borderColor = "";
    document.getElementById("Email").style.borderColor = "";
    document.getElementById("TipoTel").style.borderColor = "";
    document.getElementById("TelefonoM").style.borderColor = "";
    document.getElementById("TelefonoF").style.borderColor = "";
    document.getElementById("Año").style.borderColor = "";
    document.getElementById("Mes").style.borderColor = "";
    document.getElementById("Dia").style.borderColor = "";
}