export type ConnectionStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED";

export interface Connection {
  id: string;          
  senderId: string;     
  receiverId: string;   
  status: ConnectionStatus; 
  createdAt: string;    
  updatedAt: string;    
}
