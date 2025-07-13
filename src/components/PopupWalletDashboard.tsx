import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet as WalletIcon, 
  Send, 
  History, 
  LogOut,
  Copy,
  PieChart,
  Shield,
  Gift,
  ChevronDown,
  Plus,
  Trash2,
  Check,
  Expand,
  ExternalLink
} from 'lucide-react';
import { Balance } from './Balance';
import { SendTransaction } from './SendTransaction';
import { TxHistory } from './TxHistory';
import { ThemeToggle } from './ThemeToggle';
import { ImportWallet } from './ImportWallet';
import { Wallet } from '../types/wallet';
import { fetchBalance, getTransactionHistory } from '../utils/api';
import { useToast } from '@/hooks/use-toast';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'sent' | 'received';
}

interface PopupWalletDashboardProps {
  wallet: Wallet;
  wallets: Wallet[];
  onDisconnect: () => void;
  onSwitchWallet: (wallet: Wallet) => void;
  onAddWallet: (wallet: Wallet) => void;
  onRemoveWallet: (wallet: Wallet) => void;
}

export function PopupWalletDashboard({ 
  wallet, 
  wallets, 
  onDisconnect, 
  onSwitchWallet, 
  onAddWallet, 
  onRemoveWallet 
}: PopupWalletDashboardProps) {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
  const [nonce, setNonce] = useState(0);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const { toast } = useToast();

  // Initial data fetch when wallet is connected
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!wallet) return;

      try {
        // Fetch balance and nonce
        setIsLoadingBalance(true);
        const balanceData = await fetchBalance(wallet.address);
        setBalance(balanceData.balance);
        setNonce(balanceData.nonce);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
        toast({
          title: "Error",
          description: "Balance fetch failed",
          variant: "destructive",
        });
      } finally {
        setIsLoadingBalance(false);
      }

      try {
        // Fetch transaction history
        setIsLoadingTransactions(true);
        const historyData = await getTransactionHistory(wallet.address);
        
        if (Array.isArray(historyData)) {
          const transformedTxs = historyData.map((tx) => ({
            ...tx,
            type: tx.from?.toLowerCase() === wallet.address.toLowerCase() ? 'sent' : 'received'
          } as Transaction));
          setTransactions(transformedTxs);
        }
      } catch (error) {
        console.error('Failed to fetch transaction history:', error);
        toast({
          title: "Error",
          description: "History fetch failed",
          variant: "destructive",
        });
      } finally {
        setIsLoadingTransactions(false);
      }
    };

    fetchInitialData();
  }, [wallet, toast]);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Copy failed",
        variant: "destructive",
      });
    }
  };

  const handleDisconnect = () => {
    if (window.confirm('Are you sure you want to disconnect all wallets? Make sure you have backed up your private keys or mnemonic phrases.')) {
      onDisconnect();
    }
  };

  const handleRemoveWallet = (walletToRemove: Wallet) => {
    if (wallets.length === 1) {
      toast({
        title: "Cannot Remove",
        description: "You cannot remove the last wallet. Use disconnect instead.",
        variant: "destructive",
      });
      return;
    }
    
    if (window.confirm(`Are you sure you want to remove wallet ${truncateAddress(walletToRemove.address)}?`)) {
      onRemoveWallet(walletToRemove);
      toast({
        title: "Wallet Removed",
        description: "Wallet has been removed successfully",
      });
    }
  };

  const handleImportSuccess = (newWallet: Wallet) => {
    onAddWallet(newWallet);
    setShowImportDialog(false);
    toast({
      title: "Wallet Added",
      description: "New wallet has been added successfully",
    });
  };

  const handleBalanceUpdate = async (newBalance: number) => {
    setBalance(newBalance);
    try {
      const balanceData = await fetchBalance(wallet.address);
      setNonce(balanceData.nonce);
    } catch (error) {
      console.error('Failed to refresh nonce:', error);
    }
  };

  const handleNonceUpdate = (newNonce: number) => {
    setNonce(newNonce);
  };

  const handleTransactionsUpdate = (newTransactions: Transaction[]) => {
    setTransactions(newTransactions);
  };

  const handleTransactionSuccess = async () => {
    const refreshData = async () => {
      try {
        const balanceData = await fetchBalance(wallet.address);
        setBalance(balanceData.balance);
        setNonce(balanceData.nonce);

        const historyData = await getTransactionHistory(wallet.address);
        
        if (Array.isArray(historyData)) {
          const transformedTxs = historyData.map((tx) => ({
            ...tx,
            type: tx.from?.toLowerCase() === wallet.address.toLowerCase() ? 'sent' : 'received'
          } as Transaction));
          setTransactions(transformedTxs);
        }
      } catch (error) {
        console.error('Failed to refresh data after transaction:', error);
      }
    };

    setTimeout(refreshData, 2000);
  };

  const openExpandedView = () => {
    chrome.runtime.sendMessage({ action: 'openExpanded' });
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Compact Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                <WalletIcon className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-sm font-bold">Octra Wallet</h1>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
                    <div className="flex items-center space-x-1">
                      <p className="text-xs text-muted-foreground">
                        {truncateAddress(wallet.address)}
                      </p>
                      <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-80 max-h-60 p-0">
                  <div className="px-2 pt-1.5 pb-1 text-sm font-medium text-center">
                    Wallets ({wallets.length})
                  </div>
                  <DropdownMenuSeparator />
                  <div className="max-h-40 overflow-y-auto p-1">
                    {wallets.map((w, i) => (
                      <div
                        key={w.address}
                        className="flex items-center justify-between p-2 rounded-sm hover:bg-accent cursor-pointer group"
                        onClick={() => onSwitchWallet(w)}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs truncate">
                              #{i + 1} {truncateAddress(w.address)}
                            </span>
                            {w.address === wallet.address && (
                              <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(w.address, 'Address');
                            }}
                            className="h-5 w-5 p-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          {wallets.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveWallet(w);
                              }}
                              className="h-5 w-5 p-0 text-red-500"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <div
                    onClick={() => setShowImportDialog(true)}
                    className="flex items-center justify-center space-x-2 p-2 cursor-pointer hover:bg-accent rounded-sm mx-1 mb-1"
                  >
                    <Plus className="h-3 w-3" />
                    <span className="text-xs">Add Wallet</span>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="sm"
              onClick={openExpandedView}
              className="h-7 px-2"
              title="Open in full screen"
            >
              <Expand className="h-3 w-3" />
            </Button>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={handleDisconnect}
              className="h-7 px-2 text-red-600 hover:text-red-700"
            >
              <LogOut className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-3 overflow-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-3">
          <TabsList className="grid w-full grid-cols-3 h-8">
            <TabsTrigger value="overview" className="text-xs">
              <PieChart className="h-3 w-3 mr-1" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="send" className="text-xs">
              <Send className="h-3 w-3 mr-1" />
              Send
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs">
              <History className="h-3 w-3 mr-1" />
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-3">
            <Balance 
              wallet={wallet} 
              balance={balance}
              onBalanceUpdate={handleBalanceUpdate}
              isLoading={isLoadingBalance}
              isPopup={true}
            />
          </TabsContent>

          <TabsContent value="send">
            <SendTransaction
              wallet={wallet} 
              balance={balance}
              nonce={nonce}
              onBalanceUpdate={handleBalanceUpdate}
              onNonceUpdate={handleNonceUpdate}
              onTransactionSuccess={handleTransactionSuccess}
              isPopup={true}
            />
          </TabsContent>

          <TabsContent value="history">
            <TxHistory 
              wallet={wallet} 
              transactions={transactions}
              onTransactionsUpdate={handleTransactionsUpdate}
              isLoading={isLoadingTransactions}
              isPopup={true}
            />
          </TabsContent>
        </Tabs>
      </main>

      {/* Import Dialog */}
      <Dialog open={showImportDialog} onOpenChange={setShowImportDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Import Additional Wallet</DialogTitle>
          </DialogHeader>
          <ImportWallet onWalletImported={handleImportSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
}