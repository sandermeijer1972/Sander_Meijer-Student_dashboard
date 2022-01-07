import React from "react"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from "victory"

class Charts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fun: true,
            difficult: true
        }
    }

    render() {        

        const justFun = () => {
            this.setState({fun: true, difficult: false})
        }
        
        const justDiff = () => {
            this.setState({fun: false, difficult: true})
        }
        
        const funAndDiff = () => {
            this.setState({fun: true, difficult: true})
        }

        return (
            <div>
                <VictoryChart
                    domainPadding={5}
                    height={200}
                >
                    <VictoryLegend
                        x={165}
                        y={35}
                        centerTitle
                        orientation="horizontal"
                        gutter={20}
                        style={{
                            labels: { fontSize: 6, fill: "yellow" }
                        }}
                        data={[
                            { name: "fun-factor", symbol: { fill: "#55FF00" } },
                            { name: "moeilijkheidsgraad", symbol: { fill: "#FF0000" } }
                        ]}
                    />
                    <VictoryAxis 
                        label="opdrachten"
                        tickValues={this.props.student.map(item => item.opdracht)}
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
                            data={this.props.student}
                            x={"opdracht"}
                            y={"funfactor"}
                            style={{
                                data: {
                                    fill: "#55FF00",
                                    display: !this.state.fun && "none"
                                }
                            }}
                        />
                        <VictoryBar 
                            data={this.props.student}
                            x={"opdracht"}
                            y={"moeilijkheidsgraad"}
                            style={{
                                data: {
                                    fill: "#FF0000",
                                    display: !this.state.difficult && "none"
                                }
                            }}
                        />
                    </VictoryGroup>
                </VictoryChart>
                <div>
                    <button onClick={justFun}>alleen fun-factor</button>
                    <button onClick={justDiff}>alleen moeilijkheidsgraad</button>
                    <button onClick={funAndDiff}>zowel fun-factor als moeilijkheidsgraad</button>
                </div>
            </div>
        )
    }
}

export default Charts 
