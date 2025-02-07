import { io } from "socket.io-client";
const socket = io("http://localhost:5000"); // Update for production
export default socket;
