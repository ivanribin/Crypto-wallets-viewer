import { useEffect, useState } from "react";
import { WalletConnectMessages } from "@utils/constants";
import { setIsLoading } from "@store/slices/Application";
import { type IWalletData } from "@pages/WalletsPage/meta";

export type TEthereumMethod = string;

export const GET_ETHERIUIM_ACCOUNTS_METHOD: TEthereumMethod = "eth_requestAccounts";
export const GET_ETHERIUM_ACCOUNT_BALANCE_METHOD: TEthereumMethod = "eth_getBalance";
export const ETHEREUM_EXTENSION_IDENTIFIER = "metamask";

const useEthereumHook = () => {
  const [ethereumAccountData, setEthereumAccountData] =
    useState<IWalletData | null>(null);

  const ethereum = window?.ethereum;

  const clearEthereumAccountData = (): void => {
    setEthereumAccountData(null);
  }

  const connectEthereumWallet = async () => {
    try {
      if (!ethereum) {
        alert(WalletConnectMessages.NOT_FIND_EXTENSION + ETHEREUM_EXTENSION_IDENTIFIER);

        return;
      }

      setIsLoading(true);

      const accounts = await window.ethereum.request({
        method: GET_ETHERIUIM_ACCOUNTS_METHOD,
      });

      if (!accounts?.length) {
        throw new Error(ETHEREUM_EXTENSION_IDENTIFIER + WalletConnectMessages.PROPERLY_CONNECT_WARNING);
      }

      const address = accounts[0];

      const balance = await window.ethereum.request({
        method: GET_ETHERIUM_ACCOUNT_BALANCE_METHOD,
        params: [
          address,
          "latest",
        ]
      })

      setEthereumAccountData({
        address: address,
        balance: balance,
      })
    } catch (error) {
      console.error(WalletConnectMessages.CONNECT_ERROR, error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    connectEthereumWallet();
  }, [])

  return {
    ethereumAccountData,
    clearEthereumAccountData,
    connectEthereumWallet,
  }
}

export default useEthereumHook;
