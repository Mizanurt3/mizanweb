import {Products} from '../../../components';
import FetchByMizan from '../../../hooks/FetchByMizan';
const RelatedProducts = ({productId,categoryId}) => {

    const {loading, error, data}= FetchByMizan(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;


   


    return (
    <div className="related-products">
            <Products headingText="Ralated Products" prod={data}/>
            
        </div>

    )
    
};

export default RelatedProducts;
