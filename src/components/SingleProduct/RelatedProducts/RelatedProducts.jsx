import {Products} from '../../../components';
import fetchByReactQuery from '../../../hooks/fetchByReactQuery';
const RelatedProducts = ({productId,categoryId}) => {

   

    const { data, isLoading, isError } = fetchByReactQuery(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`); // Replace with your actual endpoint
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;
   


    return (
    <div className="related-products">
            <Products headingText="Ralated Products" prod={data}/>
            
        </div>

    )
    
};

export default RelatedProducts;
