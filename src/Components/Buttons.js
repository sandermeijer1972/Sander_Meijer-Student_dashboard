import React from "react"

function Buttons({display, handleOptionChange}) {
    return (
        <div className="radiobuttons">
            <div className="label-title">
                welke cijfers wil je in de grafiek zien?
            </div>
            <label className="label green">
                <input
                    type="radio"
                    name="charts-to-display"
                    value="only-fun"
                    checked={display.fun && !display.difficult}
                    onChange={handleOptionChange}
                />
                alleen fun-factor
            </label>
            <label className="label red">
                <input
                    type="radio"
                    name="charts-to-display"
                    value="only-diff"
                    checked={!display.fun && display.difficult}
                    onChange={handleOptionChange}
                />
                alleen moeilijkheidsgraad
            </label>
            <label className="label">
                <input
                    type="radio"
                    name="charts-to-display"
                    value="fun-and-diff"
                    checked={display.fun && display.difficult}
                    onChange={handleOptionChange}
                />
                <span className="green">zowel fun-factor</span> <span className="red">als moeilijkheidsgraad</span>
            </label>
        </div>
    )
}

export default Buttons 
