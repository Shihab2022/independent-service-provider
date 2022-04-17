import { useEffect, useState } from "react"

const useServiceData=()=>{
const [serviceData,setServiceData]=useState([])

useEffect(()=>{
    fetch('fakeData.json')
    .then(res =>res.json())
    .then(data=>setServiceData(data))
},[])
return [serviceData,setServiceData]

}
export default useServiceData