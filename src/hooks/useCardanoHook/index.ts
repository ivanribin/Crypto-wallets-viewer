import { useEffect, useState } from "react";
import { type TWalletAddress } from "@pages/WalletsPage/meta";
import { WalletConnectMessages, decodeAddress } from "@utils/constants";
import { setIsLoading } from "@store/slices/Application";
import { useDispatch } from "react-redux";

export const CARDANO_EXTENSION_IDENTIFIER = "lace";

const useCardanoHook = () => {
  const dispatch = useDispatch();

  const [cardanoMaskAccountAddress, setCardanoMaskAccountAddress] =
    useState<TWalletAddress>(null);

  const cardano = window?.cardano;

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

      setCardanoMaskAccountAddress(address);

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
    cardanoMaskAccountAddress,
    setCardanoMaskAccountAddress,
    connectCardanoWallet,
  }
}

export default useCardanoHook;
