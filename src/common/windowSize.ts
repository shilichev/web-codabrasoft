import React from "react";

export function useWindowSize() {
    const [size, setSize] = React.useState(0);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize(document.body.clientWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}