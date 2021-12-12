import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {log} from "util";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (value: string) => { // need to fix any
        setName(value) // need to fix
    }
    const addUser = () => {
        // if (title.trim()) {props.addTask(title.trim());
        {
            if (name.length > name.trim().length) {
                setError(name)
            }
        }

        if (name.trim()) {
            addUserCallback(name.trim())
        }

        alert(name.length > 0 ? 'Hello ' + name + '!' : "Вы не ввели имя") // need to fix
        setName('')
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}

        />
    )
}

export default GreetingContainer
