import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
import { ConnectionProvider, WalletProvider, useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
// Create the context with the correct type
const WalletContext = createContext(null);
export const CustomWalletMultiButton = () => {
    const wallet = useSolanaWallet();
    // Conditionally render button text based on connection state
    const Buttontext = wallet.connected ? null : 'Connect';
    return (_jsx(WalletMultiButton, { style: connectNavBarStyles, children: Buttontext }));
};
// Button styles
const connectNavBarStyles = {
    backgroundColor: 'transparent', // Bootstrap 'primary' color
    color: 'white',
    // padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '40px',
};
const WalletContextProvider = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
    ], [network]);
    const wallet = useSolanaWallet();
    return (_jsx(ConnectionProvider, { endpoint: endpoint, children: _jsx(WalletProvider, { wallets: wallets, autoConnect: true, children: _jsx(WalletModalProvider, { children: _jsx(WalletContext.Provider, { value: wallet, children: children }) }) }) }));
};
export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === null) {
        throw new Error('useWallet must be used within a WalletContextProvider');
    }
    return context;
};
export default WalletContextProvider;
