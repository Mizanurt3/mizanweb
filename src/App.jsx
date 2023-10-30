import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage , BlogContentPage,SingleProductPage,CategoryPage } from "./pages";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import useFetch2 from "./hooks/useFetch2";
import AppContext from "./hooks/context";
import Context from "./hooks/context";
import { fetchDataFromApi } from "./hooks/api";
import {BlogContent,
  Header,
 Footer,
} from './components'
import MyComponent from "./hooks/MyComponent";
import Category from "./components/ShowPageCategory/Category";

function App() {


  return (
    <div>
      
      <BrowserRouter>
      <AppContext>
      <Header/>
      <Routes>
      
        <Route path="/mizanweb/"  element={<Homepage />}/>
        <Route path="/mizanweb/category"  element={<Category />}/>
        <Route path="/mizanweb/product/:id"  element={<SingleProductPage/>}/>
        <Route path="/mizanweb/category/:id"  element={<CategoryPage/>}/>
      </Routes>
      <Footer/>
      </AppContext>
      </BrowserRouter>
      
      
      
      
      
      
    </div>
    
  )
}

export default App



 // let {loading, data, error} =useFetch('https://api.cloudinary.com/v1_1/dzamw0ec2/resources/image')
  // if(loading) return <p>Loading...</p>
  // if(error) return <p>Error!</p>;
  // console.log(data)


  
  // return (
  //   <div className="App">
  //     {data && (
  //       // এখানে আপনি ডেটা দেখাতে চাইলে JSX ব্যবহার করতে পারেন
  //       <div>
  //         <h1>Data from API</h1>
  //         {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  //         {data?.data?.map((cat)=>
  //               <div key={cat.id}  className="category" >
  //                    <img src={`http://localhost:1337${cat.attributes.img.data.attributes.url}`} alt="" /> 

                    
  //               </div>

  //           )}
  //       </div>
  //     )}
  //   </div>
  // );
