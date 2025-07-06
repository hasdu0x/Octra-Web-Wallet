import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet as WalletIcon, 
  Send, 
  History, 
  LogOut,
  Copy,
  PieChart,
  ExternalLink
} from 'lucide-react';
import { Balance } from '../components/Balance';
import { MultiSend } from '../components/MultiSend';
import { TxHistory } from '../components/TxHistory';
import { ThemeToggle } from '../components/ThemeToggle';
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

interface WalletDashboardProps {
  wallet: Wallet;
  onDisconnect: () => void;
}

export function WalletDashboard({ wallet, onDisconnect }: WalletDashboardProps) {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
  const { toast } = useToast();

  // Initial data fetch when wallet is connected
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!wallet) return;

      try {
        // Fetch balance
        setIsLoadingBalance(true);
        const balanceData = await fetchBalance(wallet.address);
        setBalance(balanceData.balance);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
        toast({
          title: "Error",
          description: "Failed to fetch wallet balance",
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
          description: "Failed to fetch transaction history",
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
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDisconnect = () => {
    if (window.confirm('Are you sure you want to disconnect your wallet? Make sure you have backed up your private key or mnemonic phrase.')) {
      onDisconnect();
    }
  };

  const handleBalanceUpdate = (newBalance: number) => {
    setBalance(newBalance);
  };

  const handleTransactionsUpdate = (newTransactions: Transaction[]) => {
    setTransactions(newTransactions);
  };

  const handleTransactionSuccess = () => {
    // Refresh transaction history after successful transaction
    const refreshTransactions = async () => {
      try {
        const historyData = await getTransactionHistory(wallet.address);
        
        if (Array.isArray(historyData)) {
          const transformedTxs = historyData.map((tx) => ({
            ...tx,
            type: tx.from?.toLowerCase() === wallet.address.toLowerCase() ? 'sent' : 'received'
          } as Transaction));
          setTransactions(transformedTxs);
        }
      } catch (error) {
        console.error('Failed to refresh transaction history:', error);
      }
    };

    // Small delay to allow transaction to propagate
    setTimeout(refreshTransactions, 2000);
  };

  const openFullApp = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') });
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  return (
    <div className="w-full h-full overflow-auto">
      {/* Compact Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <WalletIcon className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-sm font-bold">Octra Wallet</h1>
              <div className="flex items-center space-x-1">
                <p className="text-xs text-muted-foreground">
                  {truncateAddress(wallet.address)}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(wallet.address, 'Address')}
                  className="h-4 w-4 p-0"
                >
                  <Copy className="h-2 w-2" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={openFullApp}
              className="h-6 w-6 p-0"
              title="Open in new tab"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={handleDisconnect}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-xs px-2 py-1"
            >
              <LogOut className="h-3 w-3 mr-1" />
              Disconnect
            </Button>
          </div>
        </div>
      </header>

      {/* Compact Content */}
      <main className="p-3">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-3">
          <TabsList className="grid w-full grid-cols-3 h-8">
            <TabsTrigger value="overview" className="flex items-center gap-1 text-xs">
              <PieChart className="h-3 w-3" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="send" className="flex items-center gap-1 text-xs">
              <Send className="h-3 w-3" />
              Send
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-1 text-xs">
              <History className="h-3 w-3" />
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-3 mt-3">
            <Card className="p-3">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">
                  {balance !== null ? `${balance.toFixed(8)}` : '0.00000000'}
                </div>
                <Badge variant="secondary" className="text-xs">
                  OCT
                </Badge>
              </div>
            </Card>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setActiveTab('send')}
                className="text-xs"
              >
                <Send className="h-3 w-3 mr-1" />
                Send
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setActiveTab('history')}
                className="text-xs"
              >
                <History className="h-3 w-3 mr-1" />
                History
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="send" className="mt-3">
            <div className="text-xs text-muted-foreground mb-2">
              For complex transactions, use the full app
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={openFullApp}
              className="w-full text-xs"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Open Full Send Interface
            </Button>
          </TabsContent>

          <TabsContent value="history" className="mt-3">
            <Card className="p-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Recent Transactions</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={openFullApp}
                    className="text-xs p-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                
                {isLoadingTransactions ? (
                  <div className="text-xs text-muted-foreground">Loading...</div>
                ) : transactions.length === 0 ? (
                  <div className="text-xs text-muted-foreground">No transactions found</div>
                ) : (
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {transactions.slice(0, 5).map((tx, index) => (
                      <div key={tx.hash || index} className="flex items-center justify-between text-xs border-b pb-1">
                        <div className="flex items-center space-x-2">
                          {tx.type === 'sent' ? (
                            <div className="text-red-500">↗</div>
                          ) : (
                            <div className="text-green-500">↙</div>
                          )}
                          <div>
                            <div className="font-medium">{tx.amount?.toFixed(4) || '0.0000'} OCT</div>
                            <div className="text-muted-foreground">
                              {new Date(tx.timestamp * 1000).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={tx.status === 'confirmed' ? 'default' : 'secondary'} 
                          className="text-xs"
                        >
                          {tx.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}