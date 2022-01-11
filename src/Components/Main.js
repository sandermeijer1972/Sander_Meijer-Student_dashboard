import React from "react"

import Charts from "./Charts"
import StudentInfo from "./StudentInfo"
import Buttons from "./Buttons"




function Main({studentData, chartDisplay, handleDisplayChange, studentInfo}) {
    //console.log(studentData)
    //console.log(studentInfo)
    return (
        <div className="main">
            <Charts student={studentData} display={chartDisplay} />            
            <Buttons display={chartDisplay} handleOptionChange={handleDisplayChange} />
            <StudentInfo studentName={studentInfo} />              
        </div>
    )
}

export default Main 
