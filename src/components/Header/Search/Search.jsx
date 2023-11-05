import  { useEffect, useState } from 'react';
import "./Search.scss";
import {MdClose} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import fetchByReactQuery from '../../../hooks/fetchByReactQuery';
function Search({setshowSearch}) {
  const [showprod, setShowprod] = useState(false);
  const [query,setQuery]=useState("")
  const navigate=useNavigate();
  const onChange= (e)=>{
    
    setQuery(e.target.value);
    e.preventDefault();
  }

 

    const { data, isLoading, isError } = fetchByReactQuery(`/api/products?populate=*&[filters][title][$contains]=${query}`); // Replace with your actual endpoint
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <div className='search-modal'>
        <div className="form-field">
            <input
            type="text" 
            autoFocus
            placeholder='Search foe products'
            value={query}
            onChange={onChange}
            />
            
            <MdClose className='close-btn' onClick={()=>{
                setshowSearch(false)
            }}/>
        </div>
        <div className="search-result-content">
          <div className="search-results">

            {!!query.length && 
            <>
            {data.data.map(item=>(
              <div key={item.id}
              onClick={()=>{
                navigate("/product/" + item.id)
                setshowSearch(false)
              }} className="search-result-item">
              <div className="img-container">
                <img src={item.attributes.img.data[0].attributes.url} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="description">
                  {item.attributes.desc}
                </span>
            </div>
            </div>
            ))}
            
            </>
            }
            
            
            
          </div>
        </div>

    </div>
  )
}

export default Search
