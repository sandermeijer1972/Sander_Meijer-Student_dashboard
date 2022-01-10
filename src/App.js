import React from "react"
import "./App.css"
import studentData from "./Data/studentdata.json"
import studentInfo from "./Data/studenteninfo"
import sanderData from "./Data/sanderData"
import sanderInfo from "./Data/sanderinfo"
import wincInfo from "./Data/wincinfo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

const studentNames = [...new Set(studentData.map(item => item.naam))];
//console.log(studentNames);

const assignments = [...new Set(studentData.map(item => item.opdracht))];
//console.log(assignments);

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
//console.log(allStudents);




class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            chartDisplay: {fun: true, difficult: true},
            menuDisplay: {all: true, evelyn: false, aranka: false, floris: false, hector: false, martina: false, maurits: false, rahima: false, sandra: false, wietske: false, storm: false, sander: false}
        }
    }

    render() {

        const emptyMenuState = () => {
            this.setState({menuDisplay: {all: false, evelyn: false, aranka: false, floris: false, hector: false, martina: false, maurits: false, rahima: false, sandra: false, wietske: false, storm: false, sander: false}})
        }

        const changeMenuState = (stud) => {
            switch(stud) {
                case "all":
                    this.setState({menuDisplay: {all: true}})
                    break
                case "evelyn":
                    this.setState({menuDisplay: {evelyn: true}})
                    break
                case "aranka":
                    this.setState({menuDisplay: {aranka: true}})
                    break
                case "floris":
                    this.setState({menuDisplay: {floris: true}})
                    break
                case "hector":
                    this.setState({menuDisplay: {hector: true}})
                    break
                case "martina":
                    this.setState({menuDisplay: {martina: true}})
                    break
                case "maurits":
                    this.setState({menuDisplay: {maurits: true}})
                    break
                case "rahima":
                    this.setState({menuDisplay: {rahima: true}})
                    break
                case "sandra":
                    this.setState({menuDisplay: {sandra: true}})
                    break
                case "wietske":
                    this.setState({menuDisplay: {wietske: true}})
                    break
                case "storm":
                    this.setState({menuDisplay: {storm: true}})
                    break
                case "sander":
                    this.setState({menuDisplay: {sander: true}})
                    break
                default:
                    this.setState({menuDisplay: {all: true, evelyn: false, aranka: false, floris: false, hector: false, martina: false, maurits: false, rahima: false, sandra: false, wietske: false, storm: false, sander: false}})
            }
        }

        const handleMenuDisplay = (event) => {
            const clickedItem = event.target.getAttribute("value")
            console.log("clicked in menu at: " + clickedItem)
            emptyMenuState()
            changeMenuState(clickedItem)
        }

        const changeDisplayState = (expr) => {
            switch(expr) {
                case "only-fun":
                    this.setState({chartDisplay: {fun: true, difficult: false}})
                    break
                case "only-diff":
                    this.setState({chartDisplay: {fun: false, difficult: true}})
                    break
                case "fun-and-diff":
                    this.setState({chartDisplay: {fun: true, difficult: true}})
                    break
                default:
                    this.setState({chartDisplay: {fun: true, difficult: true}})
            }
        }

        const handleDisplay = (event) => {
            const clickedItem = event.target.getAttribute("value")
            console.log("clicked at: " + clickedItem)
            changeDisplayState(clickedItem)
        }

        const studentToDisplay = studentNames.map(student => {
            return (
                <Route
                    key={student} 
                    path={`/${student}`} 
                    element={<Main 
                        studentData={studentData.filter(item => item.naam === student)} 
                        chartDisplay={this.state.chartDisplay} 
                        handleDisplayChange={handleDisplay}
                        studentInfo={studentInfo.filter(info => info.firstname === student)[0]}
                    />} 
                />
            )
        })

        return (
            <Router>
                <Header />
                <Nav handleMenuDisplay={handleMenuDisplay} menuDisplay={this.state.menuDisplay} />
                <Routes>
                    <Route 
                        path="/" 
                        element={<Main 
                            studentData={allStudents} 
                            chartDisplay={this.state.chartDisplay}
                            handleDisplayChange={handleDisplay}
                            studentInfo={wincInfo}
                        />} 
                    />
                    {studentToDisplay}
                    <Route 
                        path="Sander" 
                        element={<Main 
                            studentData={sanderData} 
                            chartDisplay={this.state.chartDisplay}
                            handleDisplayChange={handleDisplay}
                            studentInfo={sanderInfo}
                        />} 
                    />
                </Routes> 
                <Footer />
            </Router>
        )
    }    
}

export default App 
