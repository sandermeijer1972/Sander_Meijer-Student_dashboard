import React from "react"

function StudentInfo({studentName}) {
    return (
        <div>
            <img src={studentName.photo} alt=""></img>
            <div>{studentName.firstname} {studentName.lastname}</div>
            <div>{studentName.residence}<span style={{display: !studentName.age && "none"}}>, {studentName.age} jaar</span></div>
            <div><i className="fas fa-phone"></i> {studentName.phone}</div>
            <div><i className="far fa-envelope"></i> {studentName.email}</div>
            <div>{studentName.info}</div>
        </div>
    )
}

export default StudentInfo 
