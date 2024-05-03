import { Container } from '@mui/material';
import OrderDetails from './OrderDetails';
import getOrderById from '@/actions/getOrderById';
import NullData from '@/app/components/NullData';
import { Suspense } from 'react';

interface IPrams {
    orderId?: string;
}
const Order = async ({params}:{params:IPrams}) =>{    
    const order = await getOrderById(params);
    
    if(!order) return <NullData title="No Order"></NullData>
    return <div className="p-8"> 
        <Container>
        <Suspense fallback={<div>Loading...</div>}>
            <OrderDetails order={order} />
            </Suspense>
        </Container>
    </div>
}

export default Order;