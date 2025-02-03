import { useEffect, useState } from "react";

const useWindowResizeObserver = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState<number>(
        window.innerHeight
    );

    const update = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener("resize", update);
        };
    }, []);

    return { windowWidth, windowHeight };
};

export default useWindowResizeObserver;