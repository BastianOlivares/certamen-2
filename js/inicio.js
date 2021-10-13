"use strict";
;
var listaBitacoraPerfil;
var j = 0;
var listaAntecedentes;
var i = 0;
function checkRut(rut) {
    var rutAux = rut.value;
    //sacar guion
    rutAux = rutAux.replace('-', '');
    //aislar cuerpo de digito verificador
    var cuerpo = rutAux.slice(0, -1);
    var dv = rutAux.slice(-1).toUpperCase();
    if (!(cuerpo.length >= 7 && cuerpo.length <= 8)) {
        return false;
    }
    return true;
}
;
//AGREGAR ANTECEDENTES
var agregarAntecendete = document.getElementById("agregar");
agregarAntecendete.addEventListener("click", function () {
    var mostrar = document.getElementById('agregarAntecedentes');
    mostrar.style.display = 'block';
});
var cerrarAgregarAntecedentes = document.getElementById('botonCrear');
cerrarAgregarAntecedentes.addEventListener("click", function (event) {
    var motivo = document.getElementById("motivo");
    var fecha = document.getElementById("fechaAgregar");
    if (motivo.value != "" && fecha.value != "") {
        //INTENTE GUARDAR LA INFROMACION EN UN ARREGLO DE INTERFAZ PERO NO COMPILA BINE
        //let aux:any = motivo.value;
        //listaAntecedentes[i].motivo = aux;
        //listaAntecedentes[i].fech = fecha.value;
        //i++;
        var divPrincipal = document.createElement("div");
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var nuevo = document.getElementById("antecedentesClinicos");
        divPrincipal.className = "row ";
        divPrincipal.id = i;
        div.className = "col border-bottom border-dark";
        div2.className = "col";
        nuevo.appendChild(divPrincipal);
        divPrincipal.appendChild(div);
        div.innerHTML = '<span class="row">' + fecha.value + '</span> <span class="row">Hospitalizado por ' + motivo.value + '</span>';
        divPrincipal.appendChild(div2);
        div2.innerHTML = '<span id = "' + i + '"class="material-icons col eliminar">delete</span> <span class="row">Eliminar</span>';
        var cerrar = document.getElementById('agregarAntecedentes');
        cerrar.style.display = 'none';
        motivo.value = "";
        fecha.value = "";
    }
    else {
        console.log("$--PORFAVOR RELLENAR TODOS LAS CASILLAS DE DATOS ANTECEDENTES CLINICOS");
        event.preventDefault();
    }
});
var eliminar = document.getElementsByClassName("eliminar");
for (var i_1 = 0; i_1 < eliminar.length; i_1++) {
    eliminar[i_1].addEventListener("click", function () {
        var padre = document.getElementById('antecedentesClinicos');
        var hijo = document.getElementById('' + eliminar.id + '');
    });
}
var editar = document.getElementById("editar");
editar.addEventListener("click", function () {
    var mostrar = document.getElementById('formulario');
    mostrar.style.display = 'block';
});
var cerrarEditar = document.getElementById("botonActualizar");
cerrarEditar.addEventListener("click", function (event) {
    var contadorErrores = 0;
    var nombreCompleto = document.getElementById("nombreCompleto");
    var edad = document.getElementById("edad");
    var genero = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var rut = document.getElementById("rut");
    var region = document.getElementById("region");
    var comuna = document.getElementById("comuna");
    var edadAux = edad.value;
    if (edadAux > 122) {
        contadorErrores++;
        console.log("$--INGRESE UNA EDAD VALIDO");
    }
    if (correo.value.indexOf("@") == -1) {
        contadorErrores++;
        console.log("$--INGRESE UN CORREO VALIDO");
    }
    if (telefono.value.length != 8) {
        contadorErrores++;
        console.log("$--INGRESE UN NUMERO DE TELEFONO VALIDO");
    }
    if (checkRut(rut) == false) {
        contadorErrores++;
        console.log("$--INGRESE UN RUT VALIDO");
    }
    if (fecha.value == "") {
        contadorErrores++;
        console.log("$--INGRESE UNA FECHA CORRECTA");
    }
    if (genero.value == "default") {
        contadorErrores++;
        console.log("$--INGRESE UNA OPCION EN GENERO");
    }
    if (region.value == "default") {
        contadorErrores++;
        console.log("$--INGRESE UNA OPCION EN REGION");
    }
    if (comuna.value == "default") {
        contadorErrores++;
        console.log("$--INGRESE UNA OPCION EN COMUNA");
    }
    if (contadorErrores == 0) {
        //INTENTE GUARDAR LA INFROMACION EN UN ARREGLO DE INTERFAZ PERO NO COMPILA BINE
        //listaBitacoraPerfil[j].nombreCompleto = nombreCompleto.value;
        //listaBitacoraPerfil[j].edad = edad.value;
        //listaBitacoraPerfil[j].genero = genero.value;
        //listaBitacoraPerfil[j].fecha = fecha.value;
        //listaBitacoraPerfil[j].correo = correo.value;
        //listaBitacoraPerfil[j].correo = correo.value;
        //listaBitacoraPerfil[j].telefono = telefono.value;
        //listaBitacoraPerfil[j].rut = rut.value;
        //listaBitacoraPerfil[j].region = region.value;
        //listaBitacoraPerfil[j].comuna = comuna.value;
        //j++;
        var mostrar = document.getElementById('formulario');
        mostrar.style.display = 'none';
        var nombreActualizar = document.getElementById("nombreCompletoPefil");
        nombreActualizar.textContent = nombreCompleto.value;
        var edadActualizar = document.getElementById("edadPerfil");
        edadActualizar.textContent = '' + fecha.value + ', ' + edad.value + ' años';
    }
    else {
        console.log("$--PORFAVOR RELLENAR TODOS LAS CASILLAS DEL FORMULARIO");
        event.preventDefault();
    }
});
var region = document.getElementById("region");
var comuna = document.getElementById("comuna");
region.addEventListener("click", function () {
    var seleccionado;
    seleccionado = region.options[region.selectedIndex].value;
    if (seleccionado == "Valparaiso") {
        comuna.innerHTML = "";
        var opcion1 = document.createElement("Option");
        var opcion2 = document.createElement("Option");
        var opcion3 = document.createElement("Option");
        opcion1.value = "La calera";
        opcion1.id = "La calera";
        opcion2.value = "Quillota";
        opcion2.id = "Quillota";
        opcion3.value = "Viña del Mar";
        opcion3.id = "Viña del Mar";
        comuna.appendChild(opcion1).textContent = "La Calera";
        comuna.appendChild(opcion2).textContent = "Quillota";
        comuna.appendChild(opcion3).textContent = "Viña del Mar";
    }
    if (seleccionado == "Santiago") {
        comuna.innerHTML = "";
        var opcion1 = document.createElement("Option");
        var opcion2 = document.createElement("Option");
        var opcion3 = document.createElement("Option");
        opcion1.value = "Quilicura";
        opcion1.id = "Quilicura";
        opcion2.value = "Alto las Condes";
        opcion2.id = "Alto las Condes";
        opcion3.value = "Paine";
        opcion3.id = "Paine";
        comuna.appendChild(opcion1).textContent = "Quilicura";
        comuna.appendChild(opcion2).textContent = "Alto las Condes";
        comuna.appendChild(opcion3).textContent = "Paine";
    }
});
