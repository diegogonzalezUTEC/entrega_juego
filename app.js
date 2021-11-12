const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const { query } = require('express');
const PORT = process.env.PORT || 3050;


const app = express();
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

//mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'noentrasmas',
    database:'juego'
});

//Route
app.get('/', function(req, res) {
    res.sendFile('index.html');
  });
//Check Connect
connection.connect(error => {
    if(error)throw error;
    console.log('Database server running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



/***
 * 
 * FUNCIONES CORRESPONDIENTES A LAS RUTAS LLAMADAS DESDE EL FRONT
 * ESTAS FUNCIONES PUEDEN SER UTILIZADAS DESDE DIFERENTES CLIENTES(WEB, MOVIL, ETC)
 */

/** Listando Pistas */
app.get('/mant/cargarPistas', (req, res)=>{
    const sql = "SELECT * FROM pistas";

    connection.query(sql, (error, results)=>{
        if(error)throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.sendStatus('Not result');
        }
    })
});

/**GUARDANDO PISTAS */

app.post('/mant/guardarPista',function(req, res){
    
    var nombre = req.body.nombre;
    var carriles = req.body.carriles;
    var distancia = req.body.distancia;
    

    connection.query('INSERT INTO pistas(Nombre, Carriles, Distancia)'+
                                'VALUES(?,?,?)',[nombre, carriles, distancia], function(err){
                                    if(err) throw err;
                                    var resultado = 'OK';
                                    res.send(resultado)
                                });

});


/** Listando Pistas */
app.get('/mant/cargarPistas', (req, res)=>{
    const sql = "SELECT * FROM pistas";

    connection.query(sql, (error, results)=>{
        if(error)throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.sendStatus('Not result');
        }
    })
});

/**GUARDANDO PISTAS */

app.post('/mant/guardarPista',function(req, res){
    
    var nombre = req.body.nombre;
    var carriles = req.body.carriles;
    var distancia = req.body.distancia;
    

    connection.query('INSERT INTO pistas(Nombre, Carriles, Distancia)'+
                                'VALUES(?,?,?)',[nombre, carriles, distancia], function(err){
                                    if(err) throw err;
                                    var resultado = 'OK';
                                    res.send(resultado)
                                });

});
/*ACTUALIZANDO UNA PISTA*/
app.post('/mant/actualizarPista',function(req, res){
    var id = req.body.id;
    var nombre = req.body.nombre;
    var carriles = req.body.carriles;
    var distancia = req.body.distancia;
    var activo = req.body.activo;
    

    connection.query('UPDATE pistas SET(Nombre=?, Carriles=?, Distancia=?, Activo=?)'+
                                'WHERE idPistas=?',[nombre, carriles, distancia, id], function(err){
                                    if(err) throw err;
                                    var resultado = 'OK';
                                    res.send(resultado)
                                });

});


/** Listando CARROS */
app.get('/mant/cargarCarros', (req, res)=>{
    const sql = "SELECT * FROM carros";

    connection.query(sql, (error, results)=>{
        if(error)throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.sendStatus('Not result');
        }
    })
});

/**GUARDANDO Carros*/

app.post('/mant/guardarCarro',function(req, res){
    var id=req.body.idCarro
    var nombre = req.body.nombre;   

    connection.query('INSERT INTO carros(nombre)'+
                                'VALUES(?)',[nombre], function(err){
                                    if(err) throw err;
                                    var resultado = 'OK';
                                    res.send(resultado)
                                });

});
/*ACTUALIZANDO CARROS*/
app.post('/mant/guardarCarro',function(req, res){
    var id=req.body.idCarro
    var nombre = req.body.nombre;   

    connection.query('UPDATE carros SET (nombre=?)'+
                                'WHERE idCarros=?',[nombre, id], function(err){
                                    if(err) throw err;
                                    var resultado = 'OK';
                                    res.send(resultado)
                                });

});
/***
 * GUARDANDO COMPETENCIA
 */
app.post('/juego/guardarPodio', function(req, res){
    var jugador = req.body.jugador;
    var carro = req.body.carro;
    var contador = req.body.contador;
    var nombreJuego = req.body.nombreCompetencia;
    connection.query('INSERT INTO competencias(jugador, carro, puntaje, nombrecompetencia)'+
                                'VALUES(?,?,?,?)',[nombre], function(err){
                                    if(err) throw err;
                                    var resultado = 'OK';
                                    res.send(resultado)
                                });

});

/** Listando COMPETENCIAS */
app.get('/mant/cargarCarros', (req, res)=>{
    const sql = "SELECT * FROM competencias";

    connection.query(sql, (error, results)=>{
        if(error)throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.sendStatus('Not result');
        }
    })
});

/*app.get('/mant/maximoCarro', function(req, res){
    
    connection.query('SELECT MAX(idCarros) as maximo FROM carros',(error, results)=>{
        if(error)throw error;
        console.log(results[0].maximo);
        
        res.send(''+results[0].maximo);
    });

});*/