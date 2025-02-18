import { useEffect, useState } from "react";
import { TWalletAddress } from "../../pages/Wallets/meta";
import { WalletConnectMessages } from "../../utils/constants";

export type TEthereumMethod = string;

export const GET_ETHERIUIM_ACCOUNTS_METHOD: TEthereumMethod = "eth_requestAccounts";
export const ETHEREUM_EXTENSION_IDENTIFIER = "metamask";

const useEthereumHook = () => {
  const [ethereumAccountAddress, setEthereumAccountAddress] =
    useState<TWalletAddress>(null);

  const ethereum = window?.ethereum;

  const connectEthereumWallet = async () => {
    try {
      if (!ethereum) {
        alert(WalletConnectMessages.NOT_FIND_EXTENSION + ETHEREUM_EXTENSION_IDENTIFIER);

        return;
      }

      const accounts = await window.ethereum.request({
        method: GET_ETHERIUIM_ACCOUNTS_METHOD,
      });

      if (!accounts?.length) {
        throw new Error(ETHEREUM_EXTENSION_IDENTIFIER + WalletConnectMessages.PROPERLY_CONNECT_WARNING);
      }

      const address = accounts[0];

      setEthereumAccountAddress(address);
    } catch (error) {
      console.error(WalletConnectMessages.CONNECT_ERROR, error);
      throw error;
    }
  };

  useEffect(() => {
    connectEthereumWallet();
  }, [])

  return {
    ethereumAccountAddress,
    setEthereumAccountAddress,
    connectEthereumWallet,
  }
}

export default useEthereumHook;
