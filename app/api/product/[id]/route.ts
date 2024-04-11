import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function DELETE(request: Request,{params}:{params:{id:string}}){
    const currentUser = await getCurrentUser()

    if(!currentUser) return NextResponse.json({error:'Unauthorized'},{status:401});
    
    const product = await prisma?.product.delete({
        where:{id:params.id}
    });

    return NextResponse.json(product);
}   