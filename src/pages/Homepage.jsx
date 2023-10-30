import React from 'react'
import {  Banner, Category, Products } from '../components';
import './Home.scss';
import { useState, useEffect } from 'react';
import FetchByMizan from '../hooks/FetchByMizan';
export function Homepage() {
  const {loading, error, data}= FetchByMizan('/api/products?populate=*')
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;
    
    

    return (
        <>
            
            <Banner/>
            <div className="main-content">
            <Category />
            <Products  headingText={"Popular Products"} prod={data?data:""}/>
            </div>
            

            
            
      
        </>
    )
}


  
