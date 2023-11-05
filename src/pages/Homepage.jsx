import React from 'react'
import {  Banner, Category, Products } from '../components';
import './Home.scss';
import { Context } from '../hooks/context';
import { useContext } from 'react';
import fetchByReactQuery from '../hooks/fetchByReactQuery';
export function Homepage() {
    const { data, isLoading, isError } = fetchByReactQuery('/api/products?populate=*'); // Replace with your actual endpoint
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;

 
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


  
