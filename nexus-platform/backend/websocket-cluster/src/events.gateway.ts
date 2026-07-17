import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  
  private logger = new Logger('EventsGateway');

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    // In production, decode JWT and join user-specific rooms here
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinStadiumChannel')
  handleJoinStadium(@MessageBody() data: { stadiumId: string }, @ConnectedSocket() client: Socket) {
    client.join(`stadium_${data.stadiumId}`);
    return { event: 'joined', data: `stadium_${data.stadiumId}` };
  }

  // Used by microservices to broadcast to a room via Redis Adapter
  broadcastToStadium(stadiumId: string, event: string, payload: any) {
    this.server.to(`stadium_${stadiumId}`).emit(event, payload);
  }
}
