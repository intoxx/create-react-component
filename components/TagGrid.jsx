import TagRow from "components/TagRow";

export default function TagGrid({ items, rows,  children }) {
    return (
        <article className="flex flex-col bg-black overflow-x-auto py-4 space-y-2"
                 style={{ "--parent-px": "1rem" }}
        >
            {children ? children : (
                [...Array(rows)].map((e, i) =>
                    <TagRow items={items} key={i} />
                )
            )}
        </article>
    );
}
