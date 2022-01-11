import React from "react"
import { Link } from "react-router-dom"

function Nav({handleMenuDisplay, menuDisplay}) {
    return (
        <div className="menu">
            <Link to="/">
                <div value="all" className={menuDisplay.all ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Home</div>
            </Link>
            <Link to="/Evelyn">
                <div value="evelyn" className={menuDisplay.evelyn ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Evelyn</div>
            </Link>
            <Link to="/Aranka">
                <div value="aranka" className={menuDisplay.aranka ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Aranka</div>
            </Link>
            <Link to="/Floris">
                <div value="floris" className={menuDisplay.floris ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Floris</div>
            </Link>
            <Link to="/Hector">
                <div value="hector" className={menuDisplay.hector ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Hector</div>
            </Link>
            <Link to="/Martina">
                <div value="martina" className={menuDisplay.martina ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Martina</div>
            </Link>
            <Link to="/Maurits">
                <div value="maurits" className={menuDisplay.maurits ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Maurits</div>
            </Link>
            <Link to="/Rahima">
                <div value="rahima" className={menuDisplay.rahima ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Rahima</div>
            </Link>
            <Link to="/Sandra">
                <div value="sandra" className={menuDisplay.sandra ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Sandra</div>
            </Link>
            <Link to="/Wietske">
                <div value="wietske" className={menuDisplay.wietske ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Wietske</div>
            </Link>
            <Link to="/Storm">
                <div value="storm" className={menuDisplay.storm ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Storm</div>
            </Link>
            <Link to="/Sander">
                <div value="sander" className={menuDisplay.sander ? "menu-active" : "menu-item"} onClick={handleMenuDisplay}>Sander</div>
            </Link>         
        </div>
    )
}

export default Nav 
