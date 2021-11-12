class Dado{
    constructor(max, min){
        this.max = max;
        this.min = min;
    }
    //Getter
    get tirada(){
        return this.tirarDado();
    }

    //Método
    tirarDado(){
        var resultado;
        resultado = Math.floor(Math.random()*(this.max - this.min + 1))+ this.min;
        return resultado*100;
    }
}