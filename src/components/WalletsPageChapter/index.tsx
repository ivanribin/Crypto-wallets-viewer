import { Dispatch, SetStateAction, type ReactElement } from "react";
import { TWalletAddress } from "../../pages/Wallets/meta";
import {
    IConnectedWalletTexts,
} from "./meta";
import "./style.css";
import ConnectedWalletInfo from "../ConnectedWalletInfo";

export interface IConnectedWallet {
    connectFunction: any;
    textData: IConnectedWalletTexts;
    activeWalletAddress: TWalletAddress;
    changeWalletAddress: Dispatch<SetStateAction<TWalletAddress>>;
}

const WalletsPageChapter = ({
    connectFunction,
    textData,
    activeWalletAddress,
    changeWalletAddress,
}: IConnectedWallet): ReactElement => {
    const { title, connectButtonText } = textData;

    return (
        <div>
            <h2>{title}</h2>
            {!activeWalletAddress ? (
                <button onClick={connectFunction}>{connectButtonText}</button>
            ) : (
                <ConnectedWalletInfo activeWalletAddress={activeWalletAddress} changeWalletAddress={changeWalletAddress}/>
            )}
        </div>
    );
};

export default WalletsPageChapter;
