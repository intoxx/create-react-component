import { React, useEffect, useRef } from "react";
import TagRow from "components/TagRow";

export default function TagGrid({ children, className }) {
    const ref = useRef();

    // Trick to ensure the overflowing content elements gets a padding (not counted by default).
    // The issue is that it requires a re-render to be taken into consideration.
    let pr = 0;
    useEffect(() => {
        pr = window.getComputedStyle(ref.current).getPropertyValue("padding-right");
        ref.current.style.setProperty("--parent-pr", pr);

        // Now children just have to use the --parent-pr CSS variable as a base for their calculus.
    }, [pr]);

    return (
        <article ref={ref} className={`flex flex-col overflow-x-auto ${className}`}>
            {children}
        </article>
    );
}
