import React from "react"

import Charts from "./Charts"
import StudentInfo from "./StudentInfo"
import Buttons from "./Buttons"




function Main({studentData, chartDisplay, handleDisplayChange, studentInfo}) {
    //console.log(studentData)
    //console.log(studentInfo)
    return (
        <div>
            <Charts student={studentData} display={chartDisplay} />
            <StudentInfo studentName={studentInfo} />
            <Buttons display={chartDisplay} handleOptionChange={handleDisplayChange} />              
        </div>
    )
}

export default Main 
