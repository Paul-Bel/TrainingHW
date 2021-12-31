import React, {useState} from 'react'
import {homeWorkReducer, SortCheck_AC, SortDown_AC, SortUP_AC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = Array<{ _id: number, name: string, age: number }>

const initialPeople: UserType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: { _id: number, name: string, age: number }) => (
        <div key={p._id} className={s.text}>
            <span>{p.name}</span> <span> {p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUP_AC()))
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, SortDown_AC()))
    }
    const sortCheck = () => {
        setPeople(homeWorkReducer(initialPeople, SortCheck_AC()))
    }


    return (
        <div>
            <hr/>
            Homeworks 8
            {/*should work (должно работать)*/}
            {finalPeople}
            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortCheck}>check 18</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
