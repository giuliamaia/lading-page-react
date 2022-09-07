import "./styles.scss";
import Logo from "../../assets/images/logo.png";
import Icon from "@mdi/react"
import { mdiMenu, mdiClose } from "@mdi/js"
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    return <header className="header">
        <div className="container">
            <img src={Logo} alt="Logo" className="logo" />
            <button onClick={() => { setOpen(!open) }} className='buttonMenu'>
                <Icon path={open ? mdiClose : mdiMenu} title={open ? "Close" : "Menu"} size={1} color="white" />
            </button>
            <nav className={open ? "nav open" : "nav"}>
                <ul className="nav__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;