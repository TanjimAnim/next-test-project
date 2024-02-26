import { ProductObject } from "@/app/type/singleProductType";

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const URL = `https://groupyfy.com:8000/published-products/${params.id}/`;
  const productData = await fetch(URL);
  const singleProductData: ProductObject = await productData.json();

  return (
    <div>
      <img src={singleProductData.product.shippableProduct?.pictures.list[0]} />
      <div>{singleProductData.product.shippableProduct?.title}</div>
    </div>
  );
}
