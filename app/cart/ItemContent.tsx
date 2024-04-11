'use client'

import { formatPrice } from "@/utils/formatPrice"
import { CartProductType } from "../product/[productId]/productDetails"
import Link from "next/link"
import { truncate } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps{
    item:CartProductType
}

const  ItemContent:React.FC<ItemContentProps> = ({item}) => {
    const {handleRemoveProductFromCart , handleCartQtyIncrease,handleCartQtyDecrease } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/products/${item.id}`}>
                <div className='relative w-[70px] aspect-square'>
                    <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain" />
                </div>
            </Link>
            <div className="flex flex-col justify-between">
            <Link href={`/products/${item.id}`}>
                {truncate(item.name)}
                <div>{item.selectedImg.color}</div>
            </Link>
                <div className="w-[70px]">
                    <button className="text-slate-500 underline" onClick={()=>handleRemoveProductFromCart(item)}>Remove</button>
                </div>
           
            </div>
        </div>
        <div className="justify-self-center">{formatPrice(item.price)}</div>
        <div className="justify-self-center">
            <SetQuantity 
            cartProduct={item}
            cartCounter={true}
            handleQtyIncrease={()=>{handleCartQtyIncrease(item)}}
            handleQtyDecrease={()=>{handleCartQtyDecrease(item)}}
            />
        </div>
        <div className="justify-self-end font-semibold">
            {formatPrice(item.price * item.quantity)}
        </div>
    </div>
  )
}

export default ItemContent