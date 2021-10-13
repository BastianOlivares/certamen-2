interface antecedentesClinicos{
    motivo:string;
    fech:string;
};

interface cambioPerfil {
    nombreCompleto:any;
    edad:any;
    genero:any;
    fecha:any;
    correo:any;
    telefono:any;
    rut:any;
    region:any;
    comuna:any;
}

let listaBitacoraPerfil: Array<cambioPerfil>;
let j:number = 0

let listaAntecedentes: Array<antecedentesClinicos>;
let i:number = 0;


function checkRut (rut:any): boolean {
    let rutAux:any = rut.value;

    //sacar guion
    rutAux = rutAux.replace('-', '');

    //aislar cuerpo de digito verificador
    let cuerpo:any = rutAux.slice(0,-1); 
    let dv:any = rutAux.slice(-1).toUpperCase();

    if(!(cuerpo.length>=7 && cuerpo.length <=8)) {  
        return false;     
    }

    return true;
};

//AGREGAR ANTECEDENTES
let agregarAntecendete:any = document.getElementById("agregar");
agregarAntecendete.addEventListener("click", function() {

    let mostrar:any = document.getElementById('agregarAntecedentes');
    mostrar.style.display='block';
})

let cerrarAgregarAntecedentes:any = document.getElementById('botonCrear');
cerrarAgregarAntecedentes.addEventListener("click", function (event:any) {

    let motivo:any = document.getElementById("motivo");
    let fecha:any = document.getElementById("fechaAgregar");


    if (motivo.value !="" && fecha.value != "") {

        //INTENTE GUARDAR LA INFROMACION EN UN ARREGLO DE INTERFAZ PERO NO COMPILA BINE
        //let aux:any = motivo.value;
        //listaAntecedentes[i].motivo = aux;
        //listaAntecedentes[i].fech = fecha.value;
        //i++;
        

        let divPrincipal: any = document.createElement("div");
        let div: any = document.createElement("div");
        let div2: any = document.createElement("div");
        let nuevo:any = document.getElementById("antecedentesClinicos");

        divPrincipal.className = "row ";
        divPrincipal.id = i;
        div.className="col border-bottom border-dark";
        div2.className="col";

        nuevo.appendChild(divPrincipal);
        divPrincipal.appendChild(div);
        div.innerHTML='<span class="row">'+fecha.value+'</span> <span class="row">Hospitalizado por '+motivo.value+'</span>';
        divPrincipal.appendChild(div2);
        div2.innerHTML = '<span id = "'+i+'"class="material-icons col eliminar">delete</span> <span class="row">Eliminar</span>'

        
        let cerrar:any = document.getElementById('agregarAntecedentes');
        cerrar.style.display='none';
        
        motivo.value = "";
        fecha.value="";
    }
    else{
        console.log("$--PORFAVOR RELLENAR TODOS LAS CASILLAS DE DATOS ANTECEDENTES CLINICOS");
        event.preventDefault();
    }

})

let eliminar:any = document.getElementsByClassName("eliminar") 
for(let i = 0; i < eliminar.length; i++) {
    eliminar[i].addEventListener("click", function() {

        let padre:any = document.getElementById('antecedentesClinicos');
        let hijo: any = document.getElementById(''+eliminar.id+'');

    
    })
}


let editar:any = document.getElementById("editar");
editar.addEventListener("click", function() {

    let mostrar:any = document.getElementById('formulario');
    mostrar.style.display='block';


})

let cerrarEditar: any = document.getElementById("botonActualizar");
cerrarEditar.addEventListener("click", function (event:any){

    let contadorErrores: number = 0;

    let nombreCompleto:any = document.getElementById("nombreCompleto");
    let edad:any = document.getElementById("edad");
    let genero:any = document.getElementById("genero");
    let fecha:any = document.getElementById("fecha");
    let correo:any = document.getElementById("correo");
    let telefono:any = document.getElementById("telefono");
    let rut:any = document.getElementById("rut");
    let region:any = document.getElementById("region");
    let comuna:any = document.getElementById("comuna");

    let edadAux:number = edad.value;

    if(edadAux > 122) {
        contadorErrores++;
        console.log("$--INGRESE UNA EDAD VALIDO");
    }

    if(correo.value.indexOf("@") == -1) {
        contadorErrores++;
        console.log("$--INGRESE UN CORREO VALIDO");
    }

    if(telefono.value.length != 8) {
        contadorErrores++;
        console.log("$--INGRESE UN NUMERO DE TELEFONO VALIDO");
    }

    if(checkRut(rut) == false) {
        contadorErrores++;
        console.log("$--INGRESE UN RUT VALIDO");
    }

    if(fecha.value == ""){
        contadorErrores++;
        console.log("$--INGRESE UNA FECHA CORRECTA");
    }

    if(genero.value == "default") {
        contadorErrores++;
        console.log("$--INGRESE UNA OPCION EN GENERO");
    }

    if(region.value == "default") {
        contadorErrores++;
        console.log("$--INGRESE UNA OPCION EN REGION");
    }

    if(comuna.value == "default") {
        contadorErrores++;
        console.log("$--INGRESE UNA OPCION EN COMUNA");
    }

    if(contadorErrores == 0) {

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

        let mostrar:any = document.getElementById('formulario');
        mostrar.style.display='none';

        let nombreActualizar: any  = document.getElementById("nombreCompletoPefil");
        nombreActualizar.textContent=nombreCompleto.value;


        let edadActualizar: any  = document.getElementById("edadPerfil");
        edadActualizar.textContent = ''+fecha.value+', '+edad.value+' años';
        

    }
    else{
        console.log("$--PORFAVOR RELLENAR TODOS LAS CASILLAS DEL FORMULARIO");
        event.preventDefault();
    }

})

let region:any = document.getElementById("region") ;
let comuna:any = document.getElementById("comuna") ;

region.addEventListener("click", function() {
    let seleccionado: any ;
    seleccionado = region.options[region.selectedIndex].value;


    if (seleccionado == "Valparaiso") {

        comuna.innerHTML ="";

        let opcion1: any = document.createElement("Option");
        let opcion2: any = document.createElement("Option");
        let opcion3: any = document.createElement("Option");

        opcion1.value = "La calera";
        opcion1.id = "La calera";
        opcion2.value = "Quillota";
        opcion2.id = "Quillota";
        opcion3.value = "Viña del Mar";
        opcion3.id = "Viña del Mar";

        comuna.appendChild(opcion1).textContent="La Calera";
        comuna.appendChild(opcion2).textContent="Quillota";
        comuna.appendChild(opcion3).textContent="Viña del Mar";

    }

    if (seleccionado == "Santiago") {

        comuna.innerHTML ="";

        let opcion1: any = document.createElement("Option");
        let opcion2: any = document.createElement("Option");
        let opcion3: any = document.createElement("Option");

        opcion1.value = "Quilicura";
        opcion1.id = "Quilicura";
        opcion2.value = "Alto las Condes";
        opcion2.id = "Alto las Condes";
        opcion3.value = "Paine";
        opcion3.id = "Paine";

        comuna.appendChild(opcion1).textContent="Quilicura";
        comuna.appendChild(opcion2).textContent="Alto las Condes";
        comuna.appendChild(opcion3).textContent="Paine";
    }

})

 