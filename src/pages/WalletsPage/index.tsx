import useCardanoHook from "@hooks/useCardanoHook";
import useEthereumHook from "@hooks/useEthereumHook";
import WalletsPageChapter from "@components/WalletsPageChapter";
import { useSelector } from "react-redux";
import { cardanoWalletChapterTexts, ethereumWalletChapterTexts } from "./meta";
import {
    CardanoStatesKeys,
    cardanoStatesValuesMap,
} from "@store/slices/Application/meta";
import { type ReactElement } from "react";
import { type TRootState } from "@store/index";
import "./style.css";

const WalletsPage = (): ReactElement => {
    const isCardanoActiveKey = useSelector(
        (state: TRootState) => state.application.isCardanoActive
    ) as CardanoStatesKeys;
    const isCardanoActive = cardanoStatesValuesMap[isCardanoActiveKey];

    const {
        ethereumAccountData,
        clearEthereumAccountData,
        connectEthereumWallet,
    } = useEthereumHook();
    const {
        cardanoAccountData,
        clearCardanoAccountData,
        connectCardanoWallet,
    } = useCardanoHook();

    return (
        <div className="wallets-page">
            <WalletsPageChapter
                connectFunction={connectEthereumWallet}
                textData={ethereumWalletChapterTexts}
                walletData={ethereumAccountData}
                clearWalletData={clearEthereumAccountData}
            />

            {isCardanoActive && (
                <WalletsPageChapter
                    connectFunction={connectCardanoWallet}
                    textData={cardanoWalletChapterTexts}
                    walletData={cardanoAccountData}
                    clearWalletData={clearCardanoAccountData}
                />
            )}
        </div>
    );
};

export default WalletsPage;
