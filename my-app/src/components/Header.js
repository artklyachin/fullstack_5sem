//import {LocalLinkBlock} from './LocalLinkBlock';
import { Link } from 'react-router-dom';
import { LocalLinkBlock } from './auxiliary/LocalLinkBlock'

export function Header_template({ innerContent } ) {
    return (
        <header className='header'>
            <LocalLinkBlock text='Ys' to='' className='header-logo'/>
            { innerContent }
        </header>
    );
}

export function HeaderHome() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LocalLinkBlock text='product' to='/info' className='header-components' />
            <LocalLinkBlock text='Get started' to='/authorization' className='header-autorisation' />
        </div>}/>
    );
}

export function HeaderInfo() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LocalLinkBlock text='product' to='/info' className='header-components'/>
        </div>}/>
    );
}
