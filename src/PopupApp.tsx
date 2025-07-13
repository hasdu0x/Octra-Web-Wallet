import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PopupWalletDashboard } from './components/PopupWalletDashboard';
import { ThemeProvider } from './components/ThemeProvider';
import { Wallet } from './types/wallet';
import { Toaster } from '@/components/ui/toaster';

function PopupApp() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    // Load wallets from Chrome storage
    chrome.storage.local.get(['wallets', 'activeWalletId'], (result) => {
      if (result.wallets) {
        const parsedWallets = result.wallets;
        setWallets(parsedWallets);
        
        if (parsedWallets.length > 0) {
          let activeWallet = parsedWallets[0];
          if (result.activeWalletId) {
            const foundWallet = parsedWallets.find((w: Wallet) => w.address === result.activeWalletId);
            if (foundWallet) {
              activeWallet = foundWallet;
            }
          }
          setWallet(activeWallet);
        }
      }
    });
  }, []);

  const addWallet = (newWallet: Wallet) => {
    // Check if wallet already exists
    const existingWallet = wallets.find(w => w.address === newWallet.address);
    if (existingWallet) {
      setWallet(existingWallet);
      chrome.storage.local.set({ activeWalletId: existingWallet.address });
      return;
    }
    
    const updatedWallets = [...wallets, newWallet];
    setWallets(updatedWallets);
    setWallet(newWallet);
    
    // Save to Chrome storage
    chrome.storage.local.set({
      wallets: updatedWallets,
      activeWalletId: newWallet.address
    });
  };

  const switchWallet = (selectedWallet: Wallet) => {
    setWallet(selectedWallet);
    chrome.storage.local.set({ activeWalletId: selectedWallet.address });
  };

  const removeWallet = (walletToRemove: Wallet) => {
    const updatedWallets = wallets.filter(w => w.address !== walletToRemove.address);
    setWallets(updatedWallets);
    
    chrome.storage.local.set({ wallets: updatedWallets });
    
    if (wallet?.address === walletToRemove.address) {
      if (updatedWallets.length > 0) {
        const newActiveWallet = updatedWallets[0];
        setWallet(newActiveWallet);
        chrome.storage.local.set({ activeWalletId: newActiveWallet.address });
      } else {
        setWallet(null);
        chrome.storage.local.remove('activeWalletId');
      }
    }
  };

  const disconnectWallet = () => {
    setWallet(null);
    setWallets([]);
    chrome.storage.local.clear();
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="octra-wallet-theme">
      <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {!wallet ? (
          <WelcomeScreen onWalletCreated={addWallet} isPopup={true} />
        ) : (
          <PopupWalletDashboard 
            wallet={wallet} 
            wallets={wallets}
            onDisconnect={disconnectWallet}
            onSwitchWallet={switchWallet}
            onAddWallet={addWallet}
            onRemoveWallet={removeWallet}
          />
        )}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default PopupApp;