import RatingStars from "@/components/ui/RatingStars";
import { TProduct } from "@/types/product.interface";
import Image from "next/image";
import CounterButton from "./CounterButton";

const ProductDetails = ({ product }: { product: TProduct }) => {
  return (
    <section className="py-15 overflow-visible">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-30p gap-y-10 mb-60p">
          <div className="xxl:col-span-6 xl:col-span-7 col-span-12 relative">
            <div className="xl:sticky xl:top-30">
              <Image
                className="object-contain"
                src={product?.image}
                width={500}
                height={500}
                alt={product?.title}
              />
            </div>
          </div>
          <div className="xxl:col-span-6 xl:col-span-5 col-span-12">
            <div>
              <h2 className="heading-2 text-w-neutral-1 line-clamp-2 mb-16p">
                {product?.title}
              </h2>
              <div className="flex-y gap-2 mb-20p">
                <div className="flex-c gap-1 icon-24 text-primary">
                  <RatingStars rating={product?.rating?.rate} />
                </div>
                <span className="text-base text-w-neutral-4">
                  ( {product?.rating?.count} Reviews)
                </span>
              </div>
              <div className="flex-y gap-1 mb-20p">
                <span className="text-xl text-w-neutral-4 line-through">
                  ${product?.price}
                </span>
                <span className="text-lead-medium text-w-neutral-1">
                  ${product?.price}
                </span>
              </div>
              <p className="text-base text-w-neutral-4 mb-3">
                {product?.description}
              </p>
              <CounterButton product={product} />
              <div className="flex-y gap-3.5 mb-16p">
                <span className="text-l-medium text-w-neutral-1">
                  Categories:
                </span>
                <span className="text-base text-w-neutral-4">
                  {product?.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
