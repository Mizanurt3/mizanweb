import {useEffect, useState} from 'react';
import axios from 'axios';
const useFetch = (url) => {
    const [data,setData] =useState(null)
    const [error,setError] =useState(null)
    const [loading,setLoading] =useState(true)

    const params = {
        headers: {
            Authorization: "Bearer 124c5c1ae939ee943c4dfa480efc28d7236049ba3e931499bb02e8f8f4c947ffdb669f2526444adff8fa216429134556b8dba130433509cb9883bc5156bbcf51d84572f11c787f25fcd7c12e2d9d5e0e1246fb9357530f722dad16237544222fa56d110f956656380fcf8bbc94c73e2c3622b0a07121c101bd9e4b6ff1bff035",
        },
    };
    
    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await fetch(url , params)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
      
    }, [url])
    

  return {loading, error, data}
}

export default useFetch
