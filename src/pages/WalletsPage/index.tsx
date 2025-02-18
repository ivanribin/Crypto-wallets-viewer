import useCardanoHook from "../../hooks/useCardanoHook";
import useEthereumHook from "../../hooks/useEthereumHook";
import WalletsPageChapter from "../../components/WalletsPageChapter";
import { type ReactElement } from "react";
import {
    cardanoWalletChapterTexts,
    ethereumWalletChapterTexts,
} from "./meta";

export const IS_CARDANO_ACTIVE: boolean = true;

const WalletsPage = (): ReactElement => {
    const { ethereumAccountAddress, setEthereumAccountAddress, connectEthereumWallet } = useEthereumHook();
    const { cardanoMaskAccountAddress, setCardanoMaskAccountAddress, connectCardanoWallet } =
        useCardanoHook();

    return (
        <div>
            <WalletsPageChapter
                connectFunction={connectEthereumWallet}
                textData={ethereumWalletChapterTexts}
                activeWalletAddress={ethereumAccountAddress}
                changeWalletAddress={setEthereumAccountAddress}
            />

            {!IS_CARDANO_ACTIVE ? (
                <></>
            ) : (
                <WalletsPageChapter
                    connectFunction={connectCardanoWallet}
                    textData={cardanoWalletChapterTexts}
                    activeWalletAddress={cardanoMaskAccountAddress}
                    changeWalletAddress={setCardanoMaskAccountAddress}
                />
            )}
        </div>
    );
};

export default WalletsPage;
