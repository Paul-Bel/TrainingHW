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

    // $( function() {
    //     $( "#slider-range" ).slider({
    //         range: true,
    //         min: 0,
    //         max: 500,
    //         values: [ 75, 300 ],
    //         slide: function( event, ui ) {
    //             $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    //         }
    //     });
    //     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //         //@ts-ignore
    //         " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    // } );

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
