class SerVivo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    caminar() {
        console.log(`Ahora está caminando: ${this.nombre}`);
    }
}

class Persona extends SerVivo {
    
    moverse() {
        this.caminar();
    }
}

const persona = new Persona('Juanito');
persona.moverse();