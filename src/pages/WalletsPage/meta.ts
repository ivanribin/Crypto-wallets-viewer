import { type IConnectedWalletTexts } from "@components/WalletsPageChapter/meta";

export const enum WalletChaptersTexts {
    ETHEREUM_WALLET_TITLE = "Your Ethereum Wallet",
    CARDANO_WALLET_TITLE = "Your Cardano Wallet",
    ETHEREUM_CONNECT_BUTTON_TEXT = "Connect to Ethereum Wallet",
    CARDANO_CONNECT_BUTTON_TEXT = "Connect to Cardano Wallet",
}

export const ethereumWalletChapterTexts: IConnectedWalletTexts = {
    title: WalletChaptersTexts.ETHEREUM_WALLET_TITLE,
    connectButtonText: WalletChaptersTexts.ETHEREUM_CONNECT_BUTTON_TEXT,
}

export const cardanoWalletChapterTexts: IConnectedWalletTexts = {
    title: WalletChaptersTexts.CARDANO_WALLET_TITLE,
    connectButtonText: WalletChaptersTexts.CARDANO_CONNECT_BUTTON_TEXT,
}

export interface IWalletData {
    address: string;
    balance: string;
}