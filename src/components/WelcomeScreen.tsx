import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GenerateWallet } from './GenerateWallet';
import { ImportWallet } from './ImportWallet';
import { Wallet as WalletIcon, Plus, Download, Info } from 'lucide-react';
import { Wallet } from '../types/wallet';

interface WelcomeScreenProps {
  onWalletCreated: (wallet: Wallet) => void;
  isPopup?: boolean;
}

export function WelcomeScreen({ onWalletCreated, isPopup = false }: WelcomeScreenProps) {
  const [activeTab, setActiveTab] = useState<string>('generate');
  
  // Check if there are existing wallets
  const hasExistingWallets = () => {
    if (isPopup) {
      // For popup, we'll check Chrome storage in the parent component
      return false;
    } else {
      const storedWallets = localStorage.getItem('wallets');
      return storedWallets && JSON.parse(storedWallets).length > 0;
    }
  };

  return (
    <div className={`${isPopup ? 'h-full flex flex-col p-3' : 'min-h-screen flex items-center justify-center p-4'}`}>
      <div className={`w-full ${isPopup ? 'flex-1 flex flex-col' : 'max-w-4xl'}`}>
        {/* Header */}
        <div className={`text-center ${isPopup ? 'mb-4' : 'mb-8'}`}>
          <div className={`flex items-center justify-center ${isPopup ? 'mb-2' : 'mb-4'}`}>
            <div className={`${isPopup ? 'p-2' : 'p-3'} bg-primary rounded-full`}>
              <WalletIcon className={`${isPopup ? 'h-5 w-5' : 'h-8 w-8'} text-primary-foreground`} />
            </div>
          </div>
          <h1 className={`${isPopup ? 'text-lg' : 'text-4xl'} font-bold mb-2`}>Welcome to Octra Wallet</h1>
          <p className={`${isPopup ? 'text-sm' : 'text-xl'} text-muted-foreground ${isPopup ? 'mb-3' : 'mb-6'}`}>
            Your secure gateway to the Octra blockchain
          </p>
          {hasExistingWallets() && (
            <Alert className={`max-w-md mx-auto ${isPopup ? 'mb-3' : 'mb-6'}`}>
              <Info className="h-4 w-4" />
              <AlertDescription>
                You have existing wallets. Creating or importing a new wallet will add it to your collection.
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Main Card */}
        <Card className={`${isPopup ? 'flex-1 flex flex-col' : 'shadow-2xl'} border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm`}>
          <CardHeader className={`text-center ${isPopup ? 'pb-2' : 'pb-4'}`}>
            <CardTitle className="text-2xl">
              {hasExistingWallets() ? 'Add Another Wallet' : 'Get Started'}
            </CardTitle>
            <p className="text-muted-foreground">
              {hasExistingWallets() 
                ? 'Create a new wallet or import an existing one to add to your collection'
                : 'Create a new wallet or import an existing one to begin'
              }
            </p>
          </CardHeader>
          <CardContent className={isPopup ? 'flex-1 flex flex-col' : ''}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className={`w-full ${isPopup ? 'flex flex-col flex-1' : ''}`}>
              <TabsList className={`grid w-full grid-cols-2 ${isPopup ? 'mb-3' : 'mb-6'}`}>
                <TabsTrigger value="generate" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Wallet
                </TabsTrigger>
                <TabsTrigger value="import" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Import Wallet
                </TabsTrigger>
              </TabsList>

              <TabsContent value="generate" className="space-y-4">
                <div className={`text-center ${isPopup ? 'mb-2' : 'mb-4'}`}>
                  <h3 className={`${isPopup ? 'text-base' : 'text-lg'} font-semibold mb-2`}>Create New Wallet</h3>
                  <p className={`${isPopup ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
                    Generate a brand new wallet with a secure mnemonic phrase
                  </p>
                </div>
                <GenerateWallet onWalletGenerated={onWalletCreated} />
              </TabsContent>

              <TabsContent value="import" className="space-y-4">
                <div className={`text-center ${isPopup ? 'mb-2' : 'mb-4'}`}>
                  <h3 className={`${isPopup ? 'text-base' : 'text-lg'} font-semibold mb-2`}>Import Existing Wallet</h3>
                  <p className={`${isPopup ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
                    Restore your wallet using a private key or mnemonic phrase
                  </p>
                </div>
                <ImportWallet onWalletImported={onWalletCreated} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className={`text-center ${isPopup ? 'mt-3 text-xs' : 'mt-8 text-sm'} text-muted-foreground`}>
          <p>
            By using Octra Wallet, you agree to our terms of service and privacy policy.
          </p>
          <p className="mt-2">
            Always keep your private keys and mnemonic phrase secure and never share them with anyone.
          </p>
        </div>
      </div>
    </div>
  );
}