import React from "react"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from "victory"

function Charts({student, display}) {  
    //console.log(student)  

    return (            
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
                    tickLabels: {fill: "white", angle: 40, fontSize: 3.5, padding: 3, verticalAnchor: "middle", textAnchor: "start"},
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
                />
            </VictoryGroup>
        </VictoryChart>            
    )
}

export default Charts 
