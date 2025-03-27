import useCardanoHook from "@hooks/useCardanoHook";
import useEthereumHook from "@hooks/useEthereumHook";
import WalletsPageChapter from "@components/WalletsPageChapter";
import { useSelector } from "react-redux";
import { cardanoWalletChapterTexts, ethereumWalletChapterTexts } from "./meta";
import {
    CardanoStatesKeys,
    cardanoStatesValuesMap,
} from "../../store/slices/Application/meta";
import { type ReactElement } from "react";
import { type TRootState } from "@store/index";
import "./style.css";

const WalletsPage = (): ReactElement => {
    const isCardanoActiveKey = useSelector(
        (state: TRootState) => state.application.isCardanoActive
    ) as CardanoStatesKeys;
    const isCardanoActive = cardanoStatesValuesMap[isCardanoActiveKey];

    const {
        ethereumAccountAddress,
        setEthereumAccountAddress,
        connectEthereumWallet,
    } = useEthereumHook();
    const {
        cardanoMaskAccountAddress,
        setCardanoMaskAccountAddress,
        connectCardanoWallet,
    } = useCardanoHook();

    return (
        <div>
            <WalletsPageChapter
                connectFunction={connectEthereumWallet}
                textData={ethereumWalletChapterTexts}
                activeWalletAddress={ethereumAccountAddress}
                changeWalletAddress={setEthereumAccountAddress}
            />

            {isCardanoActive && (
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
