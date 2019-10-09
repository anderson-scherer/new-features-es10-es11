/**
 * 
 * Private Fields
 * 
 */
 
class teste{
    #propriedadePrivada;
    propriedadePublica;

    constructor(){
        this.#propriedadePrivada = "private property";
        this.propriedadePublica = "public property";
    }

    get privado(){
        return this.#propriedadePrivada;
    }
};

//  let obj = new teste();
//  obj.propriedadePublica;
//  obj.propriedadePrivada;
//  obj.#propriedadePrivada
//  obj.privado;