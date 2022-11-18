import http from 'https';
import { expressApp } from './app';

const DEFAULT_PORT = process.env.PORT || 3010;
const server = http.createServer(expressApp());

server.listen(DEFAULT_PORT, () => {
    console.log(`Server started at http://localhost:${DEFAULT_PORT}`);
});