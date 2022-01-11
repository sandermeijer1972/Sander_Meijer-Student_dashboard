import React from "react"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from "victory"

function Charts({student, display}) {  
    //console.log(student)  
    const studentReversed = [...student].reverse()
    //console.log(studentReversed)

    return (    
        <div className="charts">
            <div className="smallchart">
                <VictoryChart
                    domainPadding={4}
                    height={800}
                    width={250}
                    padding={50}
                >
                    <VictoryLegend
                        x={60}
                        y={25}
                        centerTitle
                        orientation="horizontal"
                        gutter={30}
                        style={{
                            labels: { fontSize: 6, fill: "yellow" }
                        }}
                        data={[
                            { name: "fun-factor", symbol: { fill: "#55FF00", type: "square" } },
                            { name: "moeilijkheidsgraad", symbol: { fill: "#FF0000", type: "square" } }
                        ]}
                    />
                    
                    <VictoryAxis 
                        tickValues={studentReversed.map(item => item.opdracht)}
                        style={{
                            axisLabel: {fill: "yellow", fontSize: 7},
                            tickLabels: {fill: "white", fontSize: 5, padding: 3, angle: -40},
                            axis: {stroke: "white"}
                        }}
                    />
                    <VictoryAxis 
                        dependentAxis
                        label="gegeven cijfer"
                        tickValues={[1,2,3,4,5]}
                        style={{
                            axisLabel: {fill: "yellow", fontSize: 8},
                            tickLabels: {fill: "white", fontSize: 8},
                            axis: {stroke: "white"},
                            grid: {stroke: "white", strokeDasharray: 7}
                        }}
                    />
                    
                    <VictoryGroup offset={3}>
                        <VictoryBar
                            horizontal 
                            data={studentReversed}
                            x={"opdracht"}
                            y={"funfactor"}
                            style={{
                                data: {
                                    fill: "#55FF00",
                                    display: !display.fun && "none"
                                }
                            }}
                            animate={{
                                duration: 1000                            
                            }}
                        />
                        <VictoryBar
                            horizontal 
                            data={studentReversed}
                            x={"opdracht"}
                            y={"moeilijkheidsgraad"}
                            style={{
                                data: {
                                    fill: "#FF0000",
                                    display: !display.difficult && "none"
                                }
                            }}
                            animate={{
                                duration: 1000                         
                            }}
                        />
                    </VictoryGroup>
                </VictoryChart>
            </div>
            <div className="bigchart">
                <VictoryChart
                    domainPadding={5}
                    height={200}
                >
                    <VictoryLegend
                        x={165}
                        y={35}
                        centerTitle
                        orientation="horizontal"
                        gutter={30}
                        style={{
                            labels: { fontSize: 6, fill: "yellow" }
                        }}
                        data={[
                            { name: "fun-factor", symbol: { fill: "#55FF00", type: "square" } },
                            { name: "moeilijkheidsgraad", symbol: { fill: "#FF0000", type: "square" } }
                        ]}
                    />
                    <VictoryAxis 
                        label="opdrachten"
                        tickValues={student.map(item => item.opdracht)}
                        style={{
                            axisLabel: {fill: "yellow", fontSize: 7},
                            tickLabels: {fill: "white", angle: 40, fontSize: 4, padding: 3, verticalAnchor: "middle", textAnchor: "start"},
                            axis: {stroke: "white"}
                        }}                        
                    />
                    <VictoryAxis 
                        dependentAxis
                        label="gegeven cijfer"
                        tickValues={[1,2,3,4,5]}
                        style={{
                            axisLabel: {fill: "yellow", fontSize: 6},
                            tickLabels: {fill: "white", fontSize: 8},
                            axis: {stroke: "white"},
                            grid: {stroke: "white", strokeDasharray: 7}
                        }}
                    />
                    <VictoryGroup offset={2.1}>
                        <VictoryBar 
                            data={student}
                            x={"opdracht"}
                            y={"funfactor"}
                            style={{
                                data: {
                                    fill: "#55FF00",
                                    display: !display.fun && "none"
                                }
                            }}
                            animate={{
                                duration: 2000                            
                            }}
                        />
                        <VictoryBar 
                            data={student}
                            x={"opdracht"}
                            y={"moeilijkheidsgraad"}
                            style={{
                                data: {
                                    fill: "#FF0000",
                                    display: !display.difficult && "none"
                                }
                            }}
                            animate={{
                                duration: 1500
                            }}
                        />
                    </VictoryGroup>
                </VictoryChart>
            </div>                        
        </div>           
    )
}

export default Charts 
