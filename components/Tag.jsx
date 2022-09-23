export default function Tag({ children, href, className = "" }) {
    return (
        <a href={href}
           className={className}
        >
            {children}
        </a>
    );
}
