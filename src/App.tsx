import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { WalletDashboard } from './components/WalletDashboard';
import { PopupWalletDashboard } from './components/PopupWalletDashboard';
import { ThemeProvider } from './components/ThemeProvider';
import { Wallet } from './types/wallet';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if we're in expanded mode
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsExpanded(urlParams.get('mode') === 'expanded');
  }, []);

  useEffect(() => {
    if (isExpanded) {
      // For expanded mode, use localStorage
      const storedWallets = localStorage.getItem('wallets');
      const activeWalletId = localStorage.getItem('activeWalletId');
      if (storedWallets) {
        const parsedWallets = JSON.parse(storedWallets);
        setWallets(parsedWallets);
        
        if (parsedWallets.length > 0) {
          let activeWallet = parsedWallets[0];
          if (activeWalletId) {
            const foundWallet = parsedWallets.find((w: Wallet) => w.address === activeWalletId);
            if (foundWallet) {
              activeWallet = foundWallet;
            }
          }
          setWallet(activeWallet);
        }
      }
    } else {
      // For popup mode, use Chrome storage
      if (typeof chrome !== 'undefined' && chrome.storage) {
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
      }
    }
  }, [isExpanded]);

  const addWallet = (newWallet: Wallet) => {
    // Check if wallet already exists
    const existingWallet = wallets.find(w => w.address === newWallet.address);
    if (existingWallet) {
      // If wallet exists, just switch to it
      setWallet(existingWallet);
      localStorage.setItem('activeWalletId', existingWallet.address);
      return;
    }
    
    const updatedWallets = [...wallets, newWallet];
    setWallets(updatedWallets);
    setWallet(newWallet);
    
    if (isExpanded) {
      localStorage.setItem('wallets', JSON.stringify(updatedWallets));
      localStorage.setItem('activeWalletId', newWallet.address);
    } else if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({
        wallets: updatedWallets,
        activeWalletId: newWallet.address
      });
    }
  };

  const switchWallet = (selectedWallet: Wallet) => {
    setWallet(selectedWallet);
    if (isExpanded) {
      localStorage.setItem('activeWalletId', selectedWallet.address);
    } else if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ activeWalletId: selectedWallet.address });
    }
  };

  const removeWallet = (walletToRemove: Wallet) => {
    const updatedWallets = wallets.filter(w => w.address !== walletToRemove.address);
    setWallets(updatedWallets);
    
    if (isExpanded) {
      localStorage.setItem('wallets', JSON.stringify(updatedWallets));
    } else if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ wallets: updatedWallets });
    }
    
    // If removing active wallet, switch to another or clear
    if (wallet?.address === walletToRemove.address) {
      if (updatedWallets.length > 0) {
        const newActiveWallet = updatedWallets[0];
        setWallet(newActiveWallet);
        if (isExpanded) {
          localStorage.setItem('activeWalletId', newActiveWallet.address);
        } else if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.local.set({ activeWalletId: newActiveWallet.address });
        }
      } else {
        setWallet(null);
        if (isExpanded) {
          localStorage.removeItem('activeWalletId');
        } else if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.local.remove('activeWalletId');
        }
      }
    }
  };

  const disconnectWallet = () => {
    setWallet(null);
    setWallets([]);
    if (isExpanded) {
      localStorage.removeItem('wallets');
      localStorage.removeItem('activeWalletId');
    } else if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.clear();
    }
    
    // Reset theme to light when disconnecting
    localStorage.setItem('octra-wallet-theme', 'dark');
    // Force theme reset by dispatching storage event
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'octra-wallet-theme',
      newValue: 'dark'
    }));
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="octra-wallet-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {!wallet ? (
          <WelcomeScreen onWalletCreated={addWallet} isPopup={!isExpanded} />
        ) : (
          isExpanded ? <WalletDashboard 
            wallet={wallet} 
            wallets={wallets}
            onDisconnect={disconnectWallet}
            onSwitchWallet={switchWallet}
            onAddWallet={addWallet}
            onRemoveWallet={removeWallet}
          /> : <PopupWalletDashboard 
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

export default App;