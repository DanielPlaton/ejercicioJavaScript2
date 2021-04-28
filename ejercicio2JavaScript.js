function averigua ()
{
cadena="TRWAGMYFPDXBNJZSQVHLCKET"
posicion = formulario.dni.value % 23
letra = cadena.substring(posicion,posicion+1)
document.getElementById("dniletra").value=formulario.dni.value+" - "+letra
}

function cargarDia(){
	alert(  d = new Date(d.getMonth(),d.getYear(),0).getDate());

	
}