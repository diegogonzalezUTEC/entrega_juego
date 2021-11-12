var pistaSeleccionada=0;
var listaPistas = [];
var carrilesDisponibles=0;
var jugadoresDePartida=[];
var dado;
var turnoTiro;
var listaCarros=[];
var distanciaMaxima=0;
var jugadorActivo;
var indiceActivo=0;
$(document).ready(function(){

    

    $('#lstPistas').append(
        '<select id="cboPistas" height="50px" width="500px" padding=10% margin="20%"></select>');
    cargarPistas();


    /***
     * FUNCION PARA LISTAR PISTAS
     * */
            function cargarPistas(){
                var i=0;
                $.ajax({
                    type: "GET",
                    url: "http://localhost:3050/mant/cargarPistas",
                    dataType: "json",
                    success: function(data){

                        $('#cboPistas').empty();
                        

                        $.each(data, function(){
                            p = new Pista(data[i].idPistas, data[i].Nombre, data[i].Carriles, data[i].Distancia);    
                            listaPistas[i]=p;
                            $('#cboPistas').append('<option id='+p.id+'">'+p.nombre +'</option>');
                        
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

        /**
         * Evento change del combo
         */
        $('#cboPistas').change(function(){
            
            pistaSeleccionada=parseInt($('#cboPistas').children(":selected").attr("id"));
            carrilesDisponibles=listaPistas[pistaSeleccionada].carriles;
            distanciaMaxima = listaPistas[pistaSeleccionada].distancia;
            $('#nCarriles').empty();
            $('#nCarriles').append('<p>Carriles disponibles para jugar: ' + carrilesDisponibles+ '</p>');
            $('#nCarriles').append('<p>Distancia máxima: ' + distanciaMaxima+'</p>');
        });


/***
 * CREANDO FORM DE JUGADORES
 */
$('#jugadores').append('<div class="input-group mb-3">'+
                            '<span class="input-group-text" id="basic-addon1">Título</span>'+
                            '<input id="txtJuego" type="text" class="form-control" placeholder="Ingrese nombre de juego" aria-label="Título de juego" aria-describedby="basic-addon1">'+
                        '</div>'+
                        '<div class="input-group mb-3">'+
                            '<span class="input-group-text" id="basic-addon1">Nombre</span>'+
                            '<input id="txtJugador" type="text" class="form-control" placeholder="Ingrese nombre de Jugador" aria-label="Nombre" aria-describedby="basic-addon1">'+
                        '</div>'+
                        'Carro para su jugador <select id="cboCarros" height="50px" width="500px" padding=10% margin="20%"></select>'+
                        '<div class="panel-footer">'+
                            '<div class="btn-group" role="group">'+
                                '<button type="button" class="btn btn-success" id="addJugador">Agregar</button>'+
                                '<button type="button" class="btn btn-danger" id="cancelarJuego">Cancelar</button>'+
                            '</div>'+
                        '</div>'+
                        '<div>'+
                            'Jugadores agregados <select id="cboJugadores" height="50px" width="500px" padding=10% margin="20%"></select>'+
                        '</div><br><br>'+
                        '<div class="panel-footer">'+
                        '<div class="container">'+
                            '<div class="row align-items-start">'+
                            '<div class=col>'+
                                '<div class="btn-group" role="group">'+
                                    '<button type="button" class="btn btn-primary" id="btnIniciar">Iniciar</button>'+
                                    '<button type="button" class="btn btn-info" id="btnTirar">Tirar dado</button>'+                            
                                '</div>'+
                            '</div>'+
                            '<div class=col>'+
                                '<input id="txtTurnoTiro" type="text" class="form-control" placeholder="Turno para tirar" aria-label="Título de juego" aria-describedby="basic-addon1">'+    
                            '</div>'+
                        '<span class="input-group-text" id="basic-addon1"><strong>Valor Dado</strong></span>'+
                        '<input id="txtDado" type="text" class="form-control" placeholder="Valor favorecido" aria-label="Título de juego" aria-describedby="basic-addon1">'+
                        '<div id="podio">'+
                        '<h3>Podio</h3>'+
                        '<table class="table">'+
                            '<thead>'+
                                '<tr>'+
                                '<th scope="col">Puesto</th>'+
                                '<th scope="col">Jugador</th>'+
                                '<th scope="col">Carro</th>'+
                                '<th scope="col">Puntaje</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody id="podioRenglones">'+

                            '</tbody>'+
                        '</table>'+
                        '<button type="button" class="btn btn-primary" id="btnGuardarPodio">Guardar competencia</button>'+
                        '</div>'+
                        '</div>');

                        cargarCarros();

         /***
     * FUNCION PARA LISTAR CARROS
     * */
            function cargarCarros(){
                var i=0;
                $.ajax({
                    type: "GET",
                    url: "http://localhost:3050/mant/cargarCarros",
                    dataType: "json",
                    success: function(data){

                        $('#cboCarros').empty();
                        

                        $.each(data, function(){
                            c = new Carro(data[i].idCarros, data[i].nombre);    
                            listaCarros[i]=c;
                            $('#cboCarros').append('<option id='+ c.idCarros +'">'+c.nombre +'</option>');
                        
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

        $('#btnTirar').prop('disabled', true);

        $('#btnIniciar').click(function(){
            $('#btnTirar').prop('disabled', false);
            dado = new Dado(0,7);
            turnoTiro=1;
            
            $('#txtTurnoTiro').val(jugadoresDePartida[turnoTiro-1].nombre);
        });
        

        $('#btnTirar').click(function(){
            if(jugadoresDePartida[turnoTiro-1].contador<distanciaMaxima){
                var valor = dado.tirada;
                $('#txtDado').prop('disabled', true);
                $('#txtDado').val(valor);
                jugadoresDePartida[turnoTiro-1].contador=jugadoresDePartida[turnoTiro-1].contador+valor;
                if(turnoTiro == jugadoresDePartida.length){
                    turnoTiro = 1;
                }else{
                    turnoTiro++;
                }
                
                $('#txtTurnoTiro').val(jugadoresDePartida[turnoTiro-1].nombre);

                console.log(jugadoresDePartida);
            }else{
                alert("Carrera finalizada!!");
                listarPodio();
            }
        });

        function listarPodio(){
            
            jugadoresDePartida.sort((a,b)=>{
                if(a.contador<b.contador){
                    return 1;
                }
                if(a.contador>b.contador){
                    return -1;
                }
                return 0;
            });
            var ii =1;
            jugadoresDePartida.forEach(function(element)    {

                $('#podioRenglones').append('<tr>'+
                                            '<td>'+ ii +'</td>'+
                                            '<td>'+element.nombre+'</td>'+
                                            '<td>'+element.carro+'</td>'+
                                            '<td>'+element.contador+'</td>'+
                                            '</tr>');
                ii++;
            });
        }
        

                        var x=1;
    $('#addJugador').click(function(){
        if($('#txtJugador').val()==''){
            alert('Debe ingresar el nombre de un jugador');
        }else{
            var j = new Jugador($('#txtJugador').val(), 0,$('#cboCarros').children(":selected").attr("nombre"));
            if(jugadoresDePartida.length < carrilesDisponibles){
                jugadoresDePartida.push(j) ;
                console.log(jugadoresDePartida);
                $('#cboJugadores').append('<option id='+ x +'">'+ j.nombre +'</option>');
                x++;
                $('#txtJugador').clear();
                $('#txtJugador').focus();

            }else{
                alert("Ha llegado al máximo de carriles de la pista");
            }
            

        }
    });

    $('#btnGuardarPodio').click(function(){
        jugadoresDePartida.forEach(function(element){

            $.ajax({
                type: "POST",
                url: "http://localhost:3050/juego/guardarPodio",
                data: "jugador=" + element.nombre+
                        "&&carro=" + element.carro+
                        "&&contador=" + element.contador+
                        "&&nombreCompetencia=" + $('#txtJuego').val(),
                dataType: "json",
                success: function(data){		
                    
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
        });

    });

});