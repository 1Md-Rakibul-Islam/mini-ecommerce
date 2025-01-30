import ProductDetails from "@/components/sections/productDetails/ProductDetails";
import TopRelatedProducts from "@/components/sections/productDetails/TopRelatedProducts";
import Breadcrumb from "@/components/shared/Breadcumb";
import { headerBannerType, NavLinkProps } from "@/types/interface";
import { TProduct } from "@/types/product.interface";
import { fetchProductByCategory, fetchProductById } from "@/utils/API";
interface PageProps {
  params: { id: string };
}

const ProductPage = async ({ params }: PageProps) => {
  const productId = params.id.toString();

  const product: TProduct | null = await fetchProductById(productId);
  const relatedProducts: TProduct[] | null = await fetchProductByCategory(
    product?.category || ""
  );

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

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
      <TopRelatedProducts
        relatedProducts={
          relatedProducts && relatedProducts.length > 0 ? relatedProducts : []
        }
      />
    </main>
  );
};

export default ProductPage;
