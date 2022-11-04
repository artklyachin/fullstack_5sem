import {Link} from "react-router-dom";

export function LocalLinkBlock({ text, to, className }) {
    return (
        <Link to={ to } className={ className }>
            { text }
        </Link>
    );
}