import React from "react"

function StudentInfo({studentName}) {
    return (
        <div className="student-info">
            <div className="student-info-grid">
                <div className="student-name">{studentName.firstname} {studentName.lastname}</div>
                <div className="student-photo">
                    <img src={studentName.photo} alt="" width="125px" height="125px"></img>
                </div>            
                <div className="student-text">{studentName.residence}<span style={{display: !studentName.age && "none"}}>, {studentName.age} jaar</span></div>
                <div className="student-text"><i className="fas fa-phone"></i> {studentName.phone}</div>
                <div className="student-text"><i className="far fa-envelope"></i> {studentName.email}</div>
                <div className="student-facts">{studentName.info}</div>
            </div>            
        </div>
    )
}

export default StudentInfo 
