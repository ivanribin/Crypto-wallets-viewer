import useCardanoHook from "../../hooks/useCardanoHook";
import useEthereumHook from "../../hooks/useEthereumHook";
import WalletsPageChapter from "../../components/WalletsPageChapter";
import { type ReactElement } from "react";
import {
    cardanoWalletChapterTexts,
    ethereumWalletChapterTexts,
} from "./meta";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import { CardanoStatesKeys, cardanoStatesMap } from "../../store/slices/Application/meta";
import "./style.css";

const WalletsPage = (): ReactElement => {
    //TODO create service, that return value in application state map by key in redux
    const isCardanoActiveKey = useSelector((state: TRootState) => state.application.isCardanoActive) as CardanoStatesKeys;
    const isCardanoActive = cardanoStatesMap[isCardanoActiveKey];

    const { ethereumAccountAddress, setEthereumAccountAddress, connectEthereumWallet } = useEthereumHook();
    const { cardanoMaskAccountAddress, setCardanoMaskAccountAddress, connectCardanoWallet } =
        useCardanoHook();

    return (
        <div>
            {/* //TODO Use hooks in WalletsPageChapter component because decrease props count and make code cleaner */}
            <WalletsPageChapter
                connectFunction={connectEthereumWallet}
                textData={ethereumWalletChapterTexts}
                activeWalletAddress={ethereumAccountAddress}
                changeWalletAddress={setEthereumAccountAddress}
            />

            {!isCardanoActive ? (
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
