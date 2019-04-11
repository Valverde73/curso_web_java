/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//document.write("<h1>Titulo</h1>");
//document.write("<input type='button' id='button' value='Nada'/>");

var h1 = document.createElement("h1");
var texto = document.createTextNode("Titulo DOM");
var body = document.getElementsByTagName("body")[0];
body.appendChild(h1);
h1.appendChild(texto);

jQuery("body").append("<h1>Titulo jQuery</h1>");

document.getElementById("macro").innerHTML = "Otro texto desde JS";

$("#macro").html($("#macro").html() + "Otro texto desde jQuery");

/*var arrayLIs = document.getElementsByClassName("unaClase");
for (var i = 0; i < arrayLIs.length; i++){
    arrayLIs[i].innerHTML += " - " + i + "!!";
}*/ 

$( ".unaClase" ).each(function( index ) {
 $( this ).text(" - " + index + "!!") ;
});


//$(".unaClase").html("Cambiar valor");