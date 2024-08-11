// src/websocket.ts
export const createWebSocketConnection = (
    onMessage: (message: string) => void,
    onClose: () => void,
    onError?: (error: Event) => void
  ) => {
    // Replace with your WebSocket server URL
    const socket = new WebSocket('ws://localhost:3000');
  
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };
  
    socket.onmessage = (event) => {
      onMessage(event.data);
    };
  
    socket.onclose = (event) => {
      console.log('Disconnected from WebSocket server');
      console.log('Reason:', event.reason);
      console.log('Code:', event.code);
      onClose();
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      onError&&onError(error);
    };
  
    return socket;
  };
  