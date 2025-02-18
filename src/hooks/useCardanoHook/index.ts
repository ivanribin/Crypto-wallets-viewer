import { useEffect, useState } from "react";
import { TWalletAddress } from "../../pages/WalletsPage/meta";
import { WalletConnectMessages } from "../../utils/constants";
import { decodeAddress } from "../../utils/constants";

export const CARDANO_EXTENSION_IDENTIFIER = "lace";

const useCardanoHook = () => {
  const [cardanoMaskAccountAddress, setCardanoMaskAccountAddress] =
    useState<TWalletAddress>(null);

  const cardano = window?.cardano;

  const connectCardanoWallet = async () => {
    try {
      if (!cardano || !cardano[CARDANO_EXTENSION_IDENTIFIER]) {
        alert(WalletConnectMessages.NOT_FIND_EXTENSION + CARDANO_EXTENSION_IDENTIFIER);

        return;
      }

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
