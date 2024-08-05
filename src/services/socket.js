import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://65.109.118.136:4747';

export const socket = io(URL);