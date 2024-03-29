import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const CompleteServiceOfCustomer = () => {
   
    const[completedTasks,setCompletedTasks] = useState([])
    const userToken = Cookies.get("customerToken")

    useEffect(()=>{
        const status = "Complete"
        axios({
            method:"get",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${userToken}`
            },
            url:`http://localhost:5000/service-detail/get-by-status/${status}`
        }).then(res => {
            console.log(res.data);
            setCompletedTasks(res.data)
        }).catch(error => console.log(error))

    },[])

  return (
    <div>
    {
        completedTasks.map((data)=>{
            return(
                <div>
                <p>Employee: {data.emp_name}</p>
                <p>Category: {data.service_category_name}</p>
                <p>Sub Category: {data.sub_category_name}</p>
                </div>
            )
        })
    }
      
    </div>
  )
}

export default CompleteServiceOfCustomer
