import "./Category.scss";
import { useNavigate } from "react-router-dom";
import FetchByMizan from "../../hooks/FetchByMizan";
import fetchByReactQuery from "../../hooks/fetchByReactQuery";
const Category = () => {
    const navigate=useNavigate();
    const { data, isLoading, isError } = fetchByReactQuery('/api/categories?populate=*'); // Replace with your actual endpoint
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;
    let cate=data;

    return (
        <div className="shp-by-category">
            
            <div className="categories">

            {cate?.data?.map((cat)=>
            
                <div key={cat.id}  className="category" onClick={()=>{
                    navigate(`/mizanweb/category/${cat.id}`)
                }}>
                    <div>
                        
                            <div className="img">
                            <img src={cat.attributes.img.data.attributes.url} alt="" /> 
                            </div>
                            <div className="text">{cat.attributes.title}</div>

                     </div>
                </div>

            )}
            
            
                

                    
                
                
                
                
            </div>
        </div>
    )
};

export default Category
