"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Marcadores {
    constructor() {
        this.activos = []; // se pudiera cargar el objecto de la bd
    }
    get activosArr() {
        return Object.values(this.activos);
    }
    agregarMarcador(marcador) {
        this.activos[marcador.id] = marcador; // se pudiera guardar en bd
        return marcador;
    }
    removerMarcador(id) {
        delete this.activos[id];
    }
    actualizarMarcador(marcador) {
        this.activos[marcador.id] = marcador;
    }
}
exports.default = Marcadores;
// const activos = {
//     '123456687474-398383-0393': {id: '12321313412', lng:'123123323', lat:'234244'},
//     '123456687474-398383-0394': {id: '12321313412', lng:'123123323', lat:'234244'},
//     '123456687474-398383-0395': {id: '12321313412', lng:'123123323', lat:'234244'},
// }
//# sourceMappingURL=marcadores.js.map