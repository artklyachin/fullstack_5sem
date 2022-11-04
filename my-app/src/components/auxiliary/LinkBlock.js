
export function LinkBlock({ text, href, className }) {
    return (
        <a href={ href } className={ className }>
            { text }
        </a>
    );
}