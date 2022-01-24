import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, unLoadingAC} from "./bll/loadingReducer";
import style from '../h9/Clock.module.css'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType>(store => store.loading.loading)


    const setLoading = () => {
        // debugger

        dispatch(loadingAC())
        console.log(loading)
        // setTimeout
        setTimeout(()=>dispatch(unLoadingAC()), 5000)
        console.log(loading)
    };

    return (
        <div className={style.forLoad}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    // <div className={style.load}>крутилка...</div>
                <div className={style.loader}>Loading...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
