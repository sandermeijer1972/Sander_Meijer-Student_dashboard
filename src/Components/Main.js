import React from "react"
import studentData from "../Data/studentdata.json"
//import studentInfo from "../Data/studentinfo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Charts from "./Charts"

const studentNames = [...new Set(studentData.map(item => item.naam))];
console.log(studentNames);

const assignments = [...new Set(studentData.map(item => item.opdracht))];
console.log(assignments);

const makeAverageArray = () => {
    const newArray = [];
    assignments.forEach(assignment => {
        let newObject = {naam: "allStudents", opdracht: assignment};
        const allDifficult = studentData.filter(ass => ass.opdracht === assignment).map(item => item.moeilijkheidsgraad);
        const averageDifficult = (allDifficult.reduce((accumulator, currentValue) => accumulator + currentValue)) / studentNames.length;
        newObject["moeilijkheidsgraad"] = averageDifficult;
        const allFun = studentData.filter(ass => ass.opdracht === assignment).map(item => item.funfactor);
        const averageFun = (allFun.reduce((accumulator, currentValue) => accumulator + currentValue)) / studentNames.length;
        newObject["funfactor"] = averageFun;
        newArray.push(newObject);
    });
    return newArray;
};

const allStudents = makeAverageArray();
console.log(allStudents);

const studentToDisplay = studentNames.map(student => {
    return (
        <Route key={student} path={`/${student}`} element={<Charts student={studentData.filter(item => item.naam ===student)} />} />
    )
})

function Main() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Charts student={allStudents} />} />
                {studentToDisplay}
            </Routes>            
        </Router>
    )
}

export default Main 
