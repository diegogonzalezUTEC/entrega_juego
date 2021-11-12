$(document).ready(function(){
    $('#pistas').click(function(){
        cargarFormPistas();
    });

    $('#carros').click(function(){
        cargarFormCarros();
    });

    /***********************************************************************************************************
     * Se dibuja formulario y listado de Pistas
     ***********************************************************************************************************/
    function cargarFormPistas(){
        $('#form').empty();
        $('#form').append(  '<div class="well">'+
                                    
                                    '<div class="input-group mb-3">'+
                                    '<span class="input-group-text" id="basic-addon1">Nombre</span>'+
                                    '<input id="txtNombre" type="text" class="form-control" placeholder="Ingrese nombre de pista" aria-label="Nombre" aria-describedby="basic-addon1">'+
                                    '</div>'+

                                    '<div class="input-group mb-3">'+
                                    '<span class="input-group-text" id="basic-addon1">Carriles</span>'+
                                    '<input id="txtCarriles" type="text" class="form-control" placeholder="Ingrese cant. Carriles" aria-label="Username" aria-describedby="basic-addon1">'+
                                    '</div>'+

                                    '<div class="input-group mb-3">'+
                                    '<span class="input-group-text" id="basic-addon1">Distancia</span>'+
                                    '<input id="txtDistancia" type="text" class="form-control" placeholder="Ingrese distancia en Km" aria-label="Username" aria-describedby="basic-addon1">'+
                                    '</div>'+

                                        '<div class="panel-footer">'+
                                            '<div class="btn-group" role="group">'+
                                                '<button type="button" class="btn btn-info" id="nuevaPista">Nuevo</button>'+
                                                '<button type="button" class="btn btn-success" id="guardarPista">Guardar</button>'+
                                                '<button type="button" class="btn btn-warning" id="modificarPista">Modificar</button>'+
                                                '<button type="button" class="btn btn-danger" id="eliminarPista">Eliminar</button>'+
                                            '</div>'+
                                        '</div>');

        $('#listado').empty();
        $('#listado').append(
                                '<div class="panel panel-success" id="panelPistas">'+
                                    '<div class="panel-heading"><strong>Listado de Pistas</strong></div>'+
                                    '<table id="tablaPistas" class="table table-bordered">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th>Id</th>'+
                                                '<th>Nombre</th>'+
                                                '<th>Carriles</th>'+
                                                '<th>Distancia</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody id="bodyRenglones">'+
                                
                                        '</tbody>'+
                                    '</table>'+
                                '</div></div></div>');

       cargarListado();
       $('#guardarPista').click(function(){
            guardarPista();
            cargarListado();
        });
    }
/***********************************************************************************************************
 * EVENTOS DE VENTANA MANT PISTAS
 ***********************************************************************************************************/
//FUNCION PARA GUARDAR UNA NUEVA PISTA
function guardarPista(){
    if($('#txtNombre').val()=='' || $('#txtCarriles').val()=='' || $('#txtDistancia').val()==''){
        alert("Debe ingresar los datos requeridos");
    }else{

        var p = new Pista($('#txtNombre').val(), $('#txtCarriles').val(),$('#txtDistancia').val())

        $.ajax({
            type: "POST",
            url: "http://localhost:3050/mant/guardarPista",
            data: "nombre=" + p.nombre+
                    "&&carriles=" + p.carriles+
                    "&&distancia=" + p.distancia,
            dataType: "json",
            success: function(data){		
                cargarListado();
            },
            error: function(jqXHR, textStatus, errorThrown){
                if (jqXHR.status ===0){
                    alert('error');

                }else if(jqXHR.status == 404){
                    alert('404');
                }else if (jqXHR.status== 500) {
                    alert('internal 500');
                }
                console.log('Error: ' + jqXHR);
            }
        });
    }
}
//FUNCION PARA MODIFICAR UNA PISTA
$('#modificarPista').click(function(){

});
//FUNCION PARA ELIMINAR UNA PISTA
$('#eliminarPista').click(function(){

});
//FUNCION PARA LISTAR PISTAS
function cargarListado(){
    var i=0;
    $.ajax({
        type: "GET",
        url: "http://localhost:3050/mant/cargarPistas",
        dataType: "json",
        success: function(data){
            $('#bodyRenglones').empty();
            $.each(data, function(){
              												
                $('#bodyRenglones').append('<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);">'+
                                                '<td>'+data[i].idPistas + '</td>'+    
                                                '<td>'+data[i].Nombre + '</td>'+
                                                '<td>'+data[i].Carriles+'</td>'+
                                                '<td>'+data[i].Distancia+'</td>'+
                                            '</tr>');
                cont++
                i++;
            });
        },
        error: function(jqXHR, textStatus, errorThrown){
            if (jqXHR.status ===0){
                alert('error');

            }else if(jqXHR.status == 404){
                alert('404');
            }else if (jqXHR.status== 500) {
                alert('internal 500');
            }
            console.log('Error: ' + jqXHR);
        }
    });
}

/***********************************************************************************************************
 * * Se dibuja formulario y listado de CARROS
***********************************************************************************************************/
 function cargarFormCarros(){
    $('#form').empty();
    $('#form').append(  '<div class="well">'+
                                
                                '<div class="input-group mb-3">'+
                                '<span class="input-group-text" id="basic-addon1">Nombre</span>'+
                                '<input id="txtNombre" type="text" class="form-control" placeholder="Ingrese nombre de carro" aria-label="Nombre" aria-describedby="basic-addon1">'+
                                '</div>'+


                                    '<div class="panel-footer">'+
                                        '<div class="btn-group" role="group">'+
                                            '<button type="button" class="btn btn-info" id="nuevoCarro">Nuevo</button>'+
                                            '<button type="button" class="btn btn-success" id="guardarCarro">Guardar</button>'+
                                            '<button type="button" class="btn btn-warning" id="modificarCarro">Modificar</button>'+
                                            '<button type="button" class="btn btn-danger" id="eliminarCarro">Eliminar</button>'+
                                        '</div>'+
                                    '</div>');

    $('#listado').empty();
    $('#listado').append(
                            '<div class="panel panel-success" id="panelCarro">'+
                                '<div class="panel-heading"><strong>Listado de Pistas</strong></div>'+
                                '<table id="tablaCarros" class="table table-bordered">'+
                                    '<thead>'+
                                        '<tr>'+
                                            '<th>Id</th>'+
                                            '<th>Nombre</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody id="bodyRenglones">'+
                            
                                    '</tbody>'+
                                '</table>'+
                            '</div></div></div>');

   cargarListadoCarro();
   $('#guardarCarro').click(function(){
        guardarCarro();
        cargarListadoCarro();
    });
}


/***********************************************************************************************************
* EVENTOS DE VENTANA MANT CARROS
***********************************************************************************************************/
//FUNCION PARA GUARDAR UNA NUEVA CARROS
function guardarCarro(){
    if($('#txtNombre').val()==''){
        alert("Debe ingresar los datos requeridos");
    }else{
        $.ajax({
            type: "POST",
            url: "http://localhost:3050/mant/guardarCarro",
            data: "nombre=" + $('#txtNombre').val(),
            dataType: "json",
            success: function(data){		
                cargarListado();
            },
            error: function(jqXHR, textStatus, errorThrown){
                if (jqXHR.status ===0){
                    alert('error');

                }else if(jqXHR.status == 404){
                    alert('404');
                }else if (jqXHR.status== 500) {
                    alert('internal 500');
                }
                console.log('Error: ' + jqXHR);
            }
        });
    }
}
//FUNCION PARA MODIFICAR UN CARRO
$('#modificarPista').click(function(){

});
//FUNCION PARA ELIMINAR UN CARRO
$('#eliminarPista').click(function(){

});
//FUNCION PARA LISTAR CARROS
function cargarListadoCarro(){
    var i=0;
        $.ajax({
            type: "GET",
            url: "http://localhost:3050/mant/cargarCarros",
            dataType: "json",
            success: function(data){
                $('#bodyRenglones').empty();
                $.each(data, function(){
                                                                
                    $('#bodyRenglones').append('<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);">'+
                                                    '<td>'+data[i].idCarros + '</td>'+    
                                                    '<td>'+data[i].nombre + '</td>'+
                                                '</tr>');
                    cont++
                    i++;
                });
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                if (jqXHR.status ===0){
                    alert('error');

                }else if(jqXHR.status == 404){
                    alert('404');
                }else if (jqXHR.status== 500) {
                    alert('internal 500');
                }
                console.log('Error: ' + jqXHR);
            }
        });

}

var cont=0;
var id_fila_selected=[];
function seleccionar(id_fila){
    console.log(id_fila);
		if($("#"+id_fila).hasClass('seleccionada')){
			$("#"+id_fila).removeClass('seleccionada');
		}
		else{
			$('#'+id_fila).addClass('seleccionada');
	
		id_fila_selected.push(id_fila);
	}
}

});