import ProductDetails from "@/components/sections/productDetails/ProductDetails";
import TopRelatedProducts from "@/components/sections/productDetails/TopRelatedProducts";
import Breadcrumb from "@/components/shared/Breadcumb";
import { headerBannerType, NavLinkProps } from "@/types/interface";
import { TProduct } from "@/types/product.interface";
import {
  fetchProductByCategory,
  fetchProductById,
  fetchProducts,
} from "@/utils/API";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const products: TProduct[] = await fetchProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  const relatedProducts = await fetchProductByCategory(product.category || "");

  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: `/products/${product.id}`, label: product.title },
  ];

  const headerData: headerBannerType = {
    title: "Product Details",
    navLinks,
  };

  return (
    <main>
      <Breadcrumb breadcrumb={headerData} />
      <ProductDetails product={product} />
      <TopRelatedProducts relatedProducts={relatedProducts ?? []} />
    </main>
  );
}
