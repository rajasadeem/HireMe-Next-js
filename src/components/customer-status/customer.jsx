import React from 'react'
import style from '@/components/customer-status/customer.module.css'
export default function CustomerStatus() {
    return (
        <div className={style.container}>
            <div className={style.status} >

                <button className={style.button1}  >Active</button>

                <button className={style.button2}>Pending</button>

                <button className={style.button3}>Completed</button>
            </div>
            <div className={style.services}>
                <button className={style.service}>Select Services</button>
            </div>
        </div>
    )
}