import {useEffect, useState} from 'react';
const useFetch2 = (url) => {
    const [products,setProducts] =useState(null)
    const [error2,setError2] =useState(null)
    const [loading2,setLoading2] =useState(true)
    
    useEffect(() => {
        const fetchData = async ()=>{
            setLoading2(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setProducts(json)
                setLoading2(false)
            } catch (error) {
                setError2(error)
                setLoading2(false)
            }
        }
        fetchData()
      
    }, [url])
    

  return {loading2, error2, products}
}

export default useFetch2