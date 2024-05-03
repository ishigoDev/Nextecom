import { Container } from '@mui/material';
import ProductDetails from './productDetails';
import ListRating from './ListRating';
import getProductById from '@/actions/getProductById';
import NullData from '@/app/components/NullData';
import AddRating from './AddRating';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { Suspense } from 'react';

interface IPrams {
    productId?: string;
}
const Product = async ({params}:{params:IPrams}) =>{
    console.log(params);

    const product = await getProductById(params);
    const user = await getCurrentUser();

    if(!product) return <NullData title="Oops! Product with the given id does not exist "/>
    
    return <div className="p-8"> 
        <Container>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductDetails product={product} />
            <div className="flex flex-col mt-20 gap-4x">
                <AddRating product={product} user={user} />
                <ListRating product={product} />
            </div>
        </Suspense>
        </Container>
    </div>
}

export default Product;