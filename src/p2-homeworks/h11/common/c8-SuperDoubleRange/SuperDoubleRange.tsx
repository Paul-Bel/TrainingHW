import React, {ChangeEvent} from 'react'
import $ from 'jquery'

type SuperDoubleRangePropsType = {

    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    ...props}
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback =(e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange([+e.currentTarget.value, value[0]])
    }


    return (
        <>
            <input
                type="range"
                value={value[0]}
                onChange={onChangeCallback}
            />
            {/*<div id="slider-range"></div>*/}
        </>
    )
}

export default SuperDoubleRange
