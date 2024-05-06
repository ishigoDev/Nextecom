export const revalidate = 0
import Container from "@/app/components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrders from "@/actions/getOrders";
import { Suspense } from "react";

const ManageOrders = async () =>{
    const orders = await getOrders();
    const currentUser = await getCurrentUser();
    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Oops Access Denied!"/>
    }


    return (<Container>
        <Suspense fallback={<div>Loading...</div>}>
        <ManageOrdersClient orders={orders} />
        </Suspense>
    </Container>)
}

export default ManageOrders;