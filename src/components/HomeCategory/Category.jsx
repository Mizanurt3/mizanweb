import "./Category.scss";
import { useNavigate } from "react-router-dom";
import FetchByMizan from "../../hooks/FetchByMizan";
const Category = () => {
   const navigate=useNavigate();
    const {loading, error, data}= FetchByMizan('/api/categories?populate=*')
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;
    let cate = data;
    console.log(cate)
    

    return (
        <div className="shp-by-category">
            
            <div className="categories">

            {cate?.data?.map((cat)=>
            
                <div key={cat.id}  className="category" onClick={()=>{
                    navigate(`/mizanweb/category/${cat.id}`)
                }}>
                    <h1>mikh</h1>
                     <img src={cat.attributes.img.data.attributes.url} alt="" /> 

                    
                </div>

            )}
            
            
                

                    
                
                
                
                
            </div>
        </div>
    )
};

export default Category