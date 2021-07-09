"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
const marcadores_1 = __importDefault(require("../models/marcadores"));
const marcadores = new marcadores_1.default();
exports.socketController = (socket) => {
    // marcadores-activos
    socket.emit('marcadores-activos', marcadores.activosArr);
    // marcador-nuevo
    socket.on('marcador-nuevo', (marcador) => {
        // console.log(socket.id);
        console.log('inicial', marcador);
        marcadores.agregarMarcador(marcador);
        socket.broadcast.emit('marcador-nuevo', marcador);
    });
    // marcador-actualizado
    socket.on('marcador-actualizado', (marcador) => {
        marcadores.actualizarMarcador(marcador);
        socket.broadcast.emit('marcador-actualizado', marcador);
        console.log('actualizado', marcador);
    });
};
//# sourceMappingURL=controller.js.map