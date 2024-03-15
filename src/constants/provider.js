import { ethers } from "ethers";


export const readOnly = new ethers.JsonRpcProvider(
    import.meta.env.VITE_rpc_call
)