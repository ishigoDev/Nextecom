import {products} from '@/utils/products';
import { Container } from '@mui/material';
import ProductDetails from './productDetails';
import ListRating from './ListRating';

interface IPrams {
    productId?: string;
}
const Product = ({params}:{params:IPrams}) =>{
    console.log(params);

    const product = products.find((item)=> item.id === params.productId)
    
    return <div className="p-8"> 
        <Container>
            <ProductDetails product={product} />
            <div className="flex flex-col mt-20 gap-4x">
                <div>Add Rating</div>
                <ListRating product={product}/>
            </div>
        </Container>
    </div>
}

export default Product;