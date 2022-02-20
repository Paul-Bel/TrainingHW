import React from "react";

export const DoubleRange = () => {

    return <>
        <div>
            <input type="range" id="volume" name="volume"
                   min="0" max="11"/>
                <label htmlFor="volume">Volume</label>
        </div>

        <div>
            <input type="range" id="cowbell" name="cowbell"
                   min="0" max="100" value="90" step="10"/>
                <label htmlFor="cowbell">Cowbell</label>
        </div>
    </>
}
