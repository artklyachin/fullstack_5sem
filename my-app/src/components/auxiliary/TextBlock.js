
export function TextBlock({ text, className }) {
    return (
        <div dangerouslySetInnerHTML={ {__html: text} } className={ className } />
    );
}