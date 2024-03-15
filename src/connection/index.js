import { createWeb3Modal, defaultConfig } from "@web3modal/ethers"


// 2. Set chains
const mumbai = {
    chainId: import.meta.env.VITE_chainId,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: import.meta.env.VITE_explore_url,
    rpcUrl: import.meta.env.VITE_rpc_call
}

const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}


export const configureWallet = () => {
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [mumbai],
        projectId: `${import.meta.env.VITE_projectId}`,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
    });
}