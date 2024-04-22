import { Container } from '@mui/material';
import ProductDetails from './productDetails';
import ListRating from './ListRating';
import getProductById from '@/actions/getProductById';
import NullData from '@/app/components/NullData';

interface IPrams {
    productId?: string;
}
const Product = async ({params}:{params:IPrams}) =>{
    console.log(params);

    const product = await getProductById(params);

    if(!product) return <NullData title="Oops! Product with the given id does not exist "/>
    
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