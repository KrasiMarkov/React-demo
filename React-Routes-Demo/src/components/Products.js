import { useParams } from 'react-router-dom';

export const Products = () => {

    const {productId} = useParams();

    return(

       <>
          <h2>Products Page</h2>
          <h2>Product {productId} Specification</h2>
       </>
    );
}