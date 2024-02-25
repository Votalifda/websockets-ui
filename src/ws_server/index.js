import { createServer } from 'http';
import { WebSocketServer } from 'ws';

export const wsServer = createServer();
const wss = new WebSocketServer({server: wsServer});

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        console.log('Income Message: %s', message);
        const resp = ' {"type":"reg","data":"{\\"name\\":\\"User\\",\\"index\\":\\"1\\"}","id":0}\n'
        ws.send(resp);
    });

    ws.on('close', function() {
        console.log('Connection closed');
    });
});
