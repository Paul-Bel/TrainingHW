import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (setFilter: FilterType) => void
    deleteAffairCallback: (id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {} // need to fix
    const setHigh = () => {}
    const setMiddle = () => {}
    const setLow = () => {}

    return (
        <div>

            {mappedAffairs}

            <button onClick={()=> props.setFilter('all')}>All</button>
            <button onClick={()=> props.setFilter('high')}>High</button>
            <button onClick={()=> props.setFilter('middle')}>Middle</button>
            <button onClick={()=> props.setFilter('low')}>Low</button>
        </div>
    )
}

export default Affairs
