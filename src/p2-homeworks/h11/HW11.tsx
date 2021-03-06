import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'
import {Slider} from "./common/RangeInput";
import {DoubleRange} from "./doubleRange/DoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
const onChangeRange = (value: number) => {
    setValue1(value)
}
    const onChangeRange2 = (value: [number, number]) => {
        setValue2(value[1])
        setValue1(value[0])
    }

    return (
        <div className={s.container}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.value}>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value1={value1}
                    // сделать так чтоб value1 изменялось
                />

            </div>

            <div className={s.doubleRange}>
{/*<DoubleRange/>*/}
                <span className={s.value}>{value1}</span>
                <Slider max={100} min={0} minVal={value1} setMinVal={setValue1} maxVal={value2} setMaxVal={setValue2}/>
                <span className={s.spanMax}>{value2}</span>
                {/*<span>{value1}</span>*/}
                {/*<SuperDoubleRange*/}
                {/*    onChangeRange={onChangeRange2}*/}
                {/*    value={[value1, value2]}*/}
                {/*    // сделать так чтоб value1 и value2 изменялось*/}
                {/*/>*/}
                {/*<span>{value2}</span>*/}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
