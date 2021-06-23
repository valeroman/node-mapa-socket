import { Socket } from 'socket.io';
import Marcadores from '../models/marcadores';

const marcadores = new Marcadores();

export const socketController = (socket: Socket) => {

    // marcadores-activos
    socket.emit('marcadores-activos', marcadores.activosArr);

    // marcador-nuevo
    socket.on('marcador-nuevo', (marcador) => {
        marcadores.agregarMarcador(marcador);
        socket.broadcast.emit('marcador-nuevo', marcador);
    });

    // marcador-actualizado
    socket.on('marcador-actualizado', (marcador) => {
        marcadores.actualizarMarcador(marcador);
        socket.broadcast.emit('marcador-actualizado', marcador);
    });
   
}