import  { useEffect, useState } from 'react';
import "./Search.scss";
import {MdClose} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import FetchByMizan from '../../../hooks/FetchByMizan';
function Search({setshowSearch}) {
  const [showprod, setShowprod] = useState(false);
  const [query,setQuery]=useState("")
  const navigate=useNavigate();
  const onChange= (e)=>{
    
    setQuery(e.target.value);
    e.preventDefault();
  }

  const {loading, error, data}= FetchByMizan(`/api/products?populate=*&[filters][title][$contains]=${query}`)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;

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
                <img src={`http://localhost:1337${item.attributes.img.data[0].attributes.url}`} alt="" />
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
