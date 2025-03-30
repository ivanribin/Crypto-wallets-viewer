import { ConnectedWalletTexts } from "./meta";
import { type ReactElement } from "react";
import "./style.css";

export interface IConnectedWalletControlProps {
    copyAddress: () => void;
    clearWalletData: () => void;
}

const ConnectedWalletControl = ({
    copyAddress,
    clearWalletData,
}: IConnectedWalletControlProps): ReactElement => {
    return (
        <div className="connected-wallet-control">
            <div className="control-panel">
                <button
                    className={"control"}
                    title={ConnectedWalletTexts.ADDRESS_COPY_BUTTON_TEXT}
                    onClick={copyAddress}
                >
                    {ConnectedWalletTexts.ADDRESS_COPY_BUTTON_TEXT}
                </button>
                <button
                    className={"control"}
                    title={ConnectedWalletTexts.DELETE_WALLET_BUTTON_TEXT}
                    onClick={clearWalletData}
                >
                    {ConnectedWalletTexts.DELETE_WALLET_BUTTON_TEXT}
                </button>
            </div>
        </div>
    );
};

export default ConnectedWalletControl;
