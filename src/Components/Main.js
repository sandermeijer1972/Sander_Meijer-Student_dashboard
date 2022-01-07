import React from "react"

import Nav from "./Nav"
import Charts from "./Charts"




function Main({studentData}) {
    console.log(studentData)
    return (
        <div>
            <Nav />
            <Charts student={studentData}/>                       
        </div>
    )
}

export default Main 
