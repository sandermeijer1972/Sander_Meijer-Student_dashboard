import React from "react"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="menu">
            <Link to="/">
                <div>alle studenten</div>
            </Link>
            <Link to="../Evelyn">
                <div>Evelyn</div>
            </Link>
            <Link to="../Aranka">
                <div>Aranka</div>
            </Link>
            <Link to="../Floris">
                <div>Floris</div>
            </Link>
            <Link to="../Hector">
                <div>Hector</div>
            </Link>
            <Link to="../Martina">
                <div>Martina</div>
            </Link>
            <Link to="../Maurits">
                <div>Maurits</div>
            </Link>
            <Link to="../Rahima">
                <div>Rahima</div>
            </Link>
            <Link to="../Sandra">
                <div>Sandra</div>
            </Link>
            <Link to="../Wietske">
                <div>Wietske</div>
            </Link>
            <Link to="../Storm">
                <div>Storm</div>
            </Link>            
        </div>
    )
}

export default Nav 
