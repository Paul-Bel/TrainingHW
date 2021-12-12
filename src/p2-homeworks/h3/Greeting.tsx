import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, ...props} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)
    const onPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser();
        }
    }


    return (
        <div>
            <input
                onKeyPress={onPress}
                value={name}
                onChange={(e) => setNameCallback(e.currentTarget.value)}
                className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
