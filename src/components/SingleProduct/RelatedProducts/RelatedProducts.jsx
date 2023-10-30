import {Products} from '../../../components';
import useFetch from '../../../hooks/useFetch';
const RelatedProducts = ({productId,categoryId}) => {

    let {loading, data, error} =useFetch(`http://localhost:1337/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;
    // console.log(data)
   


    return (
    <div className="related-products">
            <Products headingText="Ralated Products" prod={data}/>
            
        </div>

    )
    
};

export default RelatedProducts;
