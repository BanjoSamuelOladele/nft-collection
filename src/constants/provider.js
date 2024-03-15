import { ethers } from "ethers";


export const rpcReadOnly = new ethers.JsonRpcProvider(
    import.meta.env.VITE_rpc_call
);


export const webSocketReadOnly = new ethers.WebSocketProvider(
    import.meta.env.VITE_webSocket
);


export const getProvider = (provider) => new ethers.BrowserProvider(provider);
