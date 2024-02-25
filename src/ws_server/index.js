import { createServer } from 'http';
import { WebSocketServer } from 'ws';

export const wsServer = createServer();
const wss = new WebSocketServer({server: wsServer});

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        console.log('Income Message %s', message);
        ws.send('Some response');
    });

    ws.on('close', function() {
        console.log('Connection closed');
    });
});
