import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NavItems = ({viewFrom}) => {
    const location = useLocation()

    // add your own parental css styles
    return (
        <>
            <Link to={"/"}>
                <span style={{
                    background: ('/' === location.pathname && viewFrom!=='footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',
                    backgroundPosition: ('/' === location.pathname && viewFrom!=='footer') ? '0 100%' : '',
                    backgroundSize: ('/' === location.pathname && viewFrom!=='footer') ? '100% 2px' : '',
                    backgroundRepeat: ('/' === location.pathname && viewFrom!=='footer') ? 'repeat-x' : '',
                    borderRadius: '5px',
                }}>Home</span>
            </Link>
            <Link to={"/about"}>
                <span style={{
                    background: ('/about' === location.pathname && viewFrom!=='footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',
                    backgroundPosition: ('/about' === location.pathname && viewFrom!=='footer') ? '0 100%' : '',
                    backgroundSize: ('/about' === location.pathname && viewFrom!=='footer') ? '100% 2px' : '',
                    backgroundRepeat: ('/about' === location.pathname && viewFrom!=='footer') ? 'repeat-x' : '',
                    borderRadius: '5px',
                }}>About</span>
            </Link>
            <Link to={"/projects"}>
                <span style={{
                    background: ('/projects' === location.pathname && viewFrom!=='footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',
                    backgroundPosition: ('/projects' === location.pathname && viewFrom!=='footer') ? '0 100%' : '',
                    backgroundSize: ('/projects' === location.pathname && viewFrom!=='footer') ? '100% 2px' : '',
                    backgroundRepeat: ('/projects' === location.pathname && viewFrom!=='footer') ? 'repeat-x' : '',
                    borderRadius: '5px',
                }}>Contact</span>
            </Link>
            {/*{(viewFrom==="footer" || viewFrom==="side") &&*/}
            {/*<Link to={"/contact"}>*/}
            {/*    <span style={{*/}
            {/*        background: ('/contact' === location.pathname && viewFrom!=='footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',*/}
            {/*        backgroundPosition: ('/contact' === location.pathname && viewFrom!=='footer') ? '0 100%' : '',*/}
            {/*        backgroundSize: ('/contact' === location.pathname && viewFrom!=='footer') ? '100% 2px' : '',*/}
            {/*        backgroundRepeat: ('/contact' === location.pathname && viewFrom!=='footer') ? 'repeat-x' : '',*/}
            {/*        borderRadius: '5px',*/}
            {/*    }}>Contact Us</span>*/}
            {/*</Link>*/}
            {/*}*/}
        </>
    )
}

export default NavItems;
