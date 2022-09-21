export default function Tag({ name, className = "" }) {
    return (
        <a href={`/${name}`}
           className={`whitespace-nowrap ${className}`}
        >
            {name}
        </a>
    );
}
