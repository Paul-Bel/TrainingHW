import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://messenge.ru/wp-content/uploads/2021/07/06.07.2021-47.jpg',
    name: 'Paul Bel',
    message: 'Hello Bob!',
    time: '23:41',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
