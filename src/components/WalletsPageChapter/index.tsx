import ConnectedWalletControl from "@components/ConnectedWalletControl";
import {
    ConnectedWalletMessages,
    ConnectedWalletTexts,
    type IConnectedWalletTexts,
} from "./meta";
import { type ReactElement } from "react";
import { type IWalletData } from "@pages/WalletsPage/meta";
import "./style.css";

export interface IWalletsPageChapterProps {
    connectFunction: any;
    textData: IConnectedWalletTexts;
    walletData: IWalletData | null;
    clearWalletData: () => void;
}

const WalletsPageChapter = ({
    connectFunction,
    textData,
    walletData,
    clearWalletData,
}: IWalletsPageChapterProps): ReactElement => {
    const { title, connectButtonText } = textData;

    const copyActiveWalletAddress = (walletAddress: string): void => {
        navigator.clipboard.writeText(walletAddress);

        alert(ConnectedWalletMessages.ADDRESS_COPY_TO_CLIPBOARD);
    };

    return (
        <div className="wallets-page-chapter info">
            <h2>{title}</h2>
            {!walletData ? (
                <button title={connectButtonText} onClick={connectFunction}>
                    {connectButtonText}
                </button>
            ) : (
                <div className="wallet">
                    <div className="data">
                        <p className="address" title={walletData.address}>
                            {ConnectedWalletTexts.ADDRESS + walletData.address}
                        </p>
                        <p className="balance" title={walletData.balance}>
                            {ConnectedWalletTexts.BALANCE + walletData.balance}
                        </p>
                    </div>
                    <ConnectedWalletControl
                        copyAddress={() => {
                            copyActiveWalletAddress(walletData.address);
                        }}
                        clearWalletData={clearWalletData}
                    />
                </div>
            )}
        </div>
    );
};

export default WalletsPageChapter;
