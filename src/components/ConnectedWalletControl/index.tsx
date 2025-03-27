import { type ReactElement } from "react";
import { ConnectedWalletMessages, ConnectedWalletTexts } from "./meta";
import { type TChangeWalletAddress } from "@pages/WalletsPage/meta";
import "./style.css";

export interface IConnectedWalletControlProps {
    activeWalletAddress: string;
    changeWalletAddress: TChangeWalletAddress;
}

const ConnectedWalletControl = ({
    activeWalletAddress,
    changeWalletAddress,
}: IConnectedWalletControlProps): ReactElement => {
    const copyActiveWalletAddress = (): void => {
        navigator.clipboard.writeText(activeWalletAddress);

        alert(ConnectedWalletMessages.ADDRESS_COPY_TO_CLIPBOARD);
    };

    const deleteWallet = (): void => {
        changeWalletAddress(null);
    };

    return (
        <div className="connected-wallet-control">
            <p className="address">{ConnectedWalletTexts.ADDRESS + activeWalletAddress}</p>
            <div className="control-panel">
                <button className={"control"} onClick={copyActiveWalletAddress}>
                    {ConnectedWalletTexts.ADDRESS_COPY_BUTTON_TEXT}
                </button>
                <button className={"control"} onClick={deleteWallet}>
                    {ConnectedWalletTexts.DELETE_WALLET_BUTTON_TEXT}
                </button>
            </div>
        </div>
    );
};

export default ConnectedWalletControl;
