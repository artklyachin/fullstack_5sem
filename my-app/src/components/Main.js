import {TextBlock} from "./auxiliary/TextBlock";
import {main_texts} from "./texts/main-texts"
import {LocalLinkBlock} from "./auxiliary/LocalLinkBlock";

export function Main() {
    return (
        <div className="main-aside">
            <div className="part-under-header"/>
            <div className="main-part-1">
                <TextBlock text={main_texts["family_history"]} className="main-part-1-txt1"/>
                <div className="mini-rectangle"></div>
            </div>
            <div className="main-part-2">
                <TextBlock text={main_texts["create_story"]} className="main-part-2-txt0"/>
                <TextBlock text={main_texts["decor_text1"]} className="main-part-2-txt1"/>
                <TextBlock text={main_texts["decor_text2"]} className="main-part-2-txt2"/>

                <img src={require('../images/img-main-face.png')} className="main-part-2-pic1" alt="face"/>
                <img src={require('../images/img-main-family.png')} className="main-part-2-pic2" alt="family"/>
                <img src={require('../images/img-main-cup.png')} className="main-part-2-pic3" alt="cup"/>
                <img src={require('../images/img-main-books.png')} className="main-part-2-pic4" alt="books"/>
            </div>
            <div className="main-part-3">
                <TextBlock text={main_texts["family_ties"]} className="main-part-3-txt1"/>
                <img src={require('../images/img-main-family-tree.png')} className="main-part-3-pic1"
                     alt="family-tree"/>
            </div>
            <div className="main-part-4">
                <img src={require('../images/img-main-big-family.png')} className="main-part-4-pic1" alt="big-family"/>
                <TextBlock text={main_texts["surprise_friends"]} className="main-part-4-txt1"/>
            </div>
            <div className="main-part-5">
                <TextBlock text={main_texts["join_to_us"]} className="main-part-5-txt1"/>
                <LocalLinkBlock text='registration' to='/authorization' className='main-part-5-auth'/>
            </div>
        </div>
    );
}
