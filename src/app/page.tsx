import Link from "next/link";
import { ProductDataType } from "./type/productType";

export default async function Home() {
  const URL = "https://groupyfy.com:8000/published-products/";
  const res = await fetch(URL);
  const productData = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {productData.map((product: ProductDataType) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="w-1/2"
          >
            <img src={product.pictures} />
            <div>{product.title}</div>
            <div>price: {product.price}</div>
          </Link>
        );
      })}
    </div>
  );
}
