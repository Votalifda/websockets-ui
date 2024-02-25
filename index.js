import { httpServer } from "./src/http_server/index.js";
import { wsServer } from "./src/ws_server/index.js";

const HTTP_PORT = 8181;
const WS_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wsServer.listen(WS_PORT, () => {
    console.log(`WS server started on port ${WS_PORT}`);
});
