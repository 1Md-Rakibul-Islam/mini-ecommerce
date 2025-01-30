import ProductCard from "@/components/cards/ProductCard";
import { TProduct } from "@/types/product.interface";
import { fetchProducts } from "@/utils/API";

export default async function AllProducts() {
  const products: TProduct[] = await fetchProducts();

  if (!products || products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <section className="section-py overflow-visible relative">
      <div className="container">
        <h2 className="heading-2 text-w-neutral-1 mb-40p">Latest Products</h2>

        <div className="p-16p bg-b-neutral-3 rounded-12 border border-shap mb-30p">
          <p className="text-lg text-w-neutral-1">
            Showing {products.length} Results
          </p>
        </div>

        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-30p mb-60p">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
