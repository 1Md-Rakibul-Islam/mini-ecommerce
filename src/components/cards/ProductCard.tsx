"use client";

import Link from "next/link";
import RatingStars from "../ui/RatingStars";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import { TProduct } from "@/types/product.interface";
import { useCart } from "@/redux/hooks/useCart";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { addToCart } = useCart();

  return (
    <div className="py-30p px-20p rounded-20 border border-shap group">
      <div className="flex-col-c overflow-hidden rounded-xl mb-30p">
        <Image
          className="w-full h-[240px] object-cover object-top group-hover:scale-105 transition-1"
          width={320}
          height={240}
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div className="py-24p border-t border-shap pt-30p">
        <Link
          href={`/products/${product?.id?.toString()}`}
          className="heading-4 text-w-neutral-1 line-clamp-1 group-hover:text-secondary transition-1 mb-20p "
        >
          {product?.title}
        </Link>
        <div className="flex-y flex-wrap gap-x-24p gap-y-3 mb-20p">
          <span className="text-xl-medium text-w-neutral-1">
            ${product?.price}
          </span>
          <div className="flex-y gap-2.5">
            <RatingStars rating={product?.rating?.rate} />
            <span className="text-xl-medium text-w-neutral-1">
              ( {product?.rating?.count} )
            </span>
          </div>
        </div>
        <div className="flex-y justify-between 4xl:gap-6 gap-3">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-md btn-neutral-3 group-hover:bg-primary group-hover:text-b-neutral-4 rounded-12"
          >
            <span className="flex-c icon-24">
              <IconShoppingCartPlus />
            </span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
