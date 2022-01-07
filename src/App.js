import React from "react"
import "./App.css"
import studentData from "./Data/studentdata.json"
//import studentInfo from "../Data/studentinfo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

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
        <Route key={student} path={`/${student}`} element={<Main studentData={studentData.filter(item => item.naam ===student)} />} />
    )
})

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main studentData={allStudents} />} />
                {studentToDisplay}
            </Routes> 
            <Footer />
        </Router>
    )
}

export default App 
