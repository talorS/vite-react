import { useEffect, useRef, useState } from "react";

export const useElementInView = (options: IntersectionObserverInit) => {
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsInView(entry.isIntersecting);
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [options]);

    return { ref: containerRef, inView: isInView };
};
