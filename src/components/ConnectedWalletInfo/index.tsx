import { type ReactElement } from "react";
import { ConnectedWalletMessages, ConnectedWalletTexts } from "./meta";
import { TChangeWalletAddress } from "../../pages/WalletsPage/meta";
import "./style.css";

export interface IConnectedWalletInfoProps {
    activeWalletAddress: string;
    changeWalletAddress: TChangeWalletAddress;
}

const ConnectedWalletInfo = ({
    activeWalletAddress,
    changeWalletAddress,
}: IConnectedWalletInfoProps): ReactElement => {
    const copyActiveWalletAddress = (): void => {
        navigator.clipboard.writeText(activeWalletAddress);

        alert(ConnectedWalletMessages.ADDRESS_COPY_TO_CLIPBOARD);
    };

    const deleteWallet = (): void => {
        changeWalletAddress(null);
    };

    return (
        <div>
            <p>{ConnectedWalletTexts.ADDRESS + activeWalletAddress}</p>
            <div>
                <button onClick={copyActiveWalletAddress}>
                    {ConnectedWalletTexts.ADDRESS_COPY_BUTTON_TEXT}
                </button>
                <button onClick={deleteWallet}>
                    {ConnectedWalletTexts.DELETE_WALLET_BUTTON_TEXT}
                </button>
            </div>
        </div>
    );
};

export default ConnectedWalletInfo;
