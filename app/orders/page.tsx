import Container from "@/app/components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import OrdersClient from "./OrderClient";
import { Suspense } from "react";

const Orders = async () =>{
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return <NullData title="Oops Access Denied!"/>
    }
    const orders = await getOrdersByUserId(currentUser.id);
    if(!orders){
        return <NullData title="No orders yet..."/>
    }
    return (<Container>
        <Suspense fallback={<div>Loading...</div>}>
        <OrdersClient orders={orders} />
        </Suspense>
    </Container>)
}

export default Orders;