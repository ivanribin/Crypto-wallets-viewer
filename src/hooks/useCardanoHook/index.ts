import { useEffect, useState } from "react";
import { WalletConnectMessages, decodeAddress } from "@utils/constants";
import { setIsLoading } from "@store/slices/Application";
import { useDispatch } from "react-redux";
import { type IWalletData } from "@pages/WalletsPage/meta";

export const CARDANO_EXTENSION_IDENTIFIER = "lace";

const useCardanoHook = () => {
  const dispatch = useDispatch();

  const [cardanoAccountData, setCardanoAccountData] =
    useState<IWalletData | null>(null);

  const cardano = window?.cardano;

  const clearCardanoAccountData = (): void => {
    setCardanoAccountData(null);
  }

  const connectCardanoWallet = async () => {
    try {
      if (!cardano || !cardano[CARDANO_EXTENSION_IDENTIFIER]) {
        alert(WalletConnectMessages.NOT_FIND_EXTENSION + CARDANO_EXTENSION_IDENTIFIER);

        return;
      }

      dispatch(setIsLoading(true));

      const wallet = await cardano[CARDANO_EXTENSION_IDENTIFIER].enable();

      const encodedAddresses = await wallet.getChangeAddress();

      if (!encodedAddresses?.length) {
        throw new Error(CARDANO_EXTENSION_IDENTIFIER + WalletConnectMessages.PROPERLY_CONNECT_WARNING);
      }

      const address = decodeAddress(encodedAddresses);

      const balance = await wallet.getBalance();

      setCardanoAccountData({
        address: address,
        balance: balance,
      })
    } catch (error) {
      console.error(WalletConnectMessages.CONNECT_ERROR, error);
      throw error;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    connectCardanoWallet();
  }, [])

  return {
    cardanoAccountData,
    clearCardanoAccountData,
    connectCardanoWallet,
  }
}

export default useCardanoHook;
