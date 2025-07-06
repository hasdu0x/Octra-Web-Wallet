import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { WalletDashboard } from './ExtensionWalletDashboard';
import { ThemeProvider } from '../components/ThemeProvider';
import { Wallet } from '../types/wallet';
import { Toaster } from '@/components/ui/toaster';

function ExtensionApp() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    // Load wallet from Chrome storage
    chrome.storage.local.get(['wallets'], (result) => {
      if (result.wallets) {
        const parsedWallets = result.wallets;
        setWallets(parsedWallets);
        if (parsedWallets.length > 0) {
          setWallet(parsedWallets[0]);
        }
      }
    });
  }, []);

  const saveWallet = (newWallet: Wallet) => {
    const updatedWallets = [...wallets, newWallet];
    setWallets(updatedWallets);
    setWallet(newWallet);
    
    // Save to Chrome storage
    chrome.storage.local.set({ wallets: updatedWallets });
  };

  const disconnectWallet = () => {
    setWallet(null);
    setWallets([]);
    
    // Clear Chrome storage
    chrome.storage.local.remove(['wallets']);
    
    // Reset theme to light when disconnecting
    chrome.storage.local.set({ 'octra-wallet-theme': 'light' });
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="octra-wallet-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {!wallet ? (
          <WelcomeScreen onWalletCreated={saveWallet} />
        ) : (
          <WalletDashboard wallet={wallet} onDisconnect={disconnectWallet} />
        )}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default ExtensionApp;