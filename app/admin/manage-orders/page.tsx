import Container from "@/app/components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrders from "@/actions/getOrders";

const ManageOrders = async () =>{
    const orders = await getOrders();
    const currentUser = await getCurrentUser();
    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Oops Access Denied!"/>
    }


    return (<Container>
        <ManageOrdersClient orders={orders} />
    </Container>)
}

export default ManageOrders;