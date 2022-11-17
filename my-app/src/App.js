import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import {HeaderHome, HeaderInfo} from './components/Header';
import {Footer} from './components/Footer';

import {Main} from './components/Main';
import {Info} from './components/Info';
import {Authorization} from './components/Authorization';

import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Main.css';
import './styles/Info.css';
import './styles/Authorization.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplate/>}>
                    <Route path="" element={<Main/>} />
                </Route>
                <Route path="" element={<InfoTemplate/>}>
                    <Route path="/info" element={<Info/>} />
                    <Route path="/authorization" element={<Authorization/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const HomeTemplate = () => {
    return (
        //<link rel="icon" type="image/x-icon" href="https://www.adobe.com/express/feature/image/media_15960174677e9abd368c05a0e53f9cc5526099a27.png?width=2000&format=webply&optimize=medium"/>
        <div>
            <HeaderHome/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

const InfoTemplate = () => {
    return (
        <div>
            <HeaderInfo/>
            <Outlet/>
        </div>
    );
}

export default App;

function changeFavicon() {
    let src = "https://www.adobe.com/express/feature/image/media_15960174677e9abd368c05a0e53f9cc5526099a27.png?width=2000&format=webply&optimize=medium";
    let link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

