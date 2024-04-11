import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncate } from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <main className="p-8"><Container>
      <div>
        <HomeBanner />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grids-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((product:any,index)=>{
          return <ProductCard data={product} key={index} />
        })}
      </div>
      </Container>
    </main>
  )
}
