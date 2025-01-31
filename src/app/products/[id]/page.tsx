// app/products/[id]/page.tsx
import { Metadata } from "next";
import ProductDetails from "@/components/sections/productDetails/ProductDetails";
import TopRelatedProducts from "@/components/sections/productDetails/TopRelatedProducts";
import Breadcrumb from "@/components/shared/Breadcumb";
import { headerBannerType, NavLinkProps } from "@/types/interface";
import {
  fetchProductByCategory,
  fetchProductById,
  fetchProducts,
} from "@/utils/API";
import { TProduct } from "@/types/product.interface";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product: TProduct) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = await fetchProductById(params.id);

  return {
    title: product?.title || "Product Details",
    description: product?.description || "Product description",
  };
}

export default async function ProductPage(props: PageProps) {
  const params = await props.params;
  const product = await fetchProductById(params.id);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  const relatedProducts = await fetchProductByCategory(product.category);

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
      <TopRelatedProducts relatedProducts={relatedProducts} />
    </main>
  );
}
