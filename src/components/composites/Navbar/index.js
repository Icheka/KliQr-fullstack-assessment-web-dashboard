import { useState } from 'react';
import { routes } from '../../../routes';
import CommonButton from '../../elements/Buttons/CommonButton';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import ExamplesMenu from '../ExamplesMenu';

const Navbar = (props) => {
    const [isExampleMenuShowing, setIsExampleMenuShowing] = useState(false);


    return (
        <nav className={`col-12 m-0 py-2 cx_navbar mb-3 d-flex flex-row justify-content-between`}>
            <div className={`small cx_textmuted`}>
                PROGRAMMING<br />
                <span className={`ml-4`}>LANGUAGE 2</span>
            </div>
            <div className={`d-flex flex-row align-items-center`}>
                <CommonButton as={'a'} href={routes.documentation} title={`DOCUMENTATION`} classes={`small`} />
                <CommonButton
                    title={`EXAMPLES`} classes={`small d-flex align-items-center`}
                    append={!!isExampleMenuShowing == true ? <FaCaretUp className={`ml-1`} /> : <FaCaretDown className={`ml-1`} />}
                    onClick={() => setIsExampleMenuShowing(!isExampleMenuShowing)}
                />
            </div>
            <ExamplesMenu show={isExampleMenuShowing} dismissButton={true} onDismiss={() => setIsExampleMenuShowing(!isExampleMenuShowing)} />
        </nav>
    );
};


export default Navbar;