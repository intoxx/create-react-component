export default function TagRow({ children, className = "" }) {
    return (
        <div className="flex">
            <div className="pr-[var(--parent-pr,0)]">
                <div className={`flex ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
