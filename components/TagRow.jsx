import Tag from "./Tag";

export default function TagGrid({ items }) {
    return (
        <div className="flex">
            <div className="flex grow px-[var(--parent-px,0)] space-x-2">
                {items.map(e =>
                    <Tag name={e} key={e} className="text-sm tracking-tight whitespace-nowrap bg-black border shadow rounded-2xl px-5 py-1 text-white font-semibold" />
                )}
            </div>
        </div>
    );
}
