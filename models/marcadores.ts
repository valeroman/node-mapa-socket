import Marcador from "./marcador";

interface Activos {
    
    id: string,
    lng: number,
    lat: number
    
}

class Marcadores {

    activos: Array<Activos>;


    constructor() {
        this.activos = []  // se pudiera cargar el objecto de la bd
    }

    get activosArr() {
        return Object.values(this.activos);
    }

    agregarMarcador(marcador: any) {
        this.activos[marcador.id] = marcador; // se pudiera guardar en bd
        return marcador;
    }

    removerMarcador(id: any) {
        delete this.activos[id];
    }

    actualizarMarcador(marcador: any) {
        this.activos[marcador.id] = marcador;
    }
}

export default Marcadores;


// const activos = {
//     '123456687474-398383-0393': {id: '12321313412', lng:'123123323', lat:'234244'},
//     '123456687474-398383-0394': {id: '12321313412', lng:'123123323', lat:'234244'},
//     '123456687474-398383-0395': {id: '12321313412', lng:'123123323', lat:'234244'},
// }