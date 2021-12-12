import React from 'react'
import s from './Message.module.css';

function Message(props: MessageType) {
    return (
        <div>

            <div className={s.message}>
                <img className={s.avatar} src={props.avatar} alt={"imges"}/>
                <div className={s.ugol}></div>
                <div className={s.oblako}>
                    <div className="name">{props.name} </div>
                    <div className={s.typeMes}>
                        <div className={s.text}> {props.message} </div>
                        <div className={s.time}> {props.time}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
type TestsOne = {
    rut: string;
    keys: number;
}


type MessageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}
export default Message
