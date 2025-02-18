import { Address } from "@emurgo/cardano-serialization-lib-asmjs";
import { Buffer } from "buffer";

export const decodeAddress = (address: string) => {
  return Address.from_bytes(Buffer.from(address, "hex")).to_bech32();
};

export const enum WalletConnectMessages {
  NOT_FIND_EXTENSION = "Can not find an extension: ",
  PROPERLY_CONNECT_WARNING = ": Please make sure you have your extension connected properly",
  CONNECT_ERROR = "Error on connectWallet: ",
}