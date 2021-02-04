import { io } from "socket.io-client";

const socket = io("wss://test-task-chat-4tmzp.ondigitalocean.app", {
  transports: ["websocket"],
  upgrade: false,
});

export default socket;