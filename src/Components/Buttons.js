import React from "react"

function Buttons({display, handleOptionChange}) {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="charts-to-display"
                    value="only-fun"
                    checked={display.fun && !display.difficult}
                    onChange={handleOptionChange}
                />
                laat alleen fun-factor zien
            </label>
            <label>
                <input
                    type="radio"
                    name="charts-to-display"
                    value="only-diff"
                    checked={!display.fun && display.difficult}
                    onChange={handleOptionChange}
                />
                laat alleen moeilijkheidsgraad zien
            </label>
            <label>
                <input
                    type="radio"
                    name="charts-to-display"
                    value="fun-and-diff"
                    checked={display.fun && display.difficult}
                    onChange={handleOptionChange}
                />
                laat zowel funfactor als moeilijkheidsgraad zien
            </label>
        </div>
    )
}

export default Buttons 
