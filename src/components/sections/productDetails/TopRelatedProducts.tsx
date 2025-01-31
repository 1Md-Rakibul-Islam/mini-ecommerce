"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/cards/ProductCard";
import { TProduct } from "@/types/product.interface";

const TopRelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: TProduct[];
}) => {
  return (
    <section className="section-pb">
      <div className="container">
        <h2 className="heading-2 text-w-neutral-1 mb-32p">Related Products</h2>
        <Swiper
          loop={true}
          slidesPerView={4}
          speed={500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
            reverseDirection: false,
          }}
          spaceBetween={24}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          modules={[Autoplay, Navigation]}
        >
          {relatedProducts?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
          <div className="flex items-center justify-center gap-28p pt-40p">
            <div className="swiper-navigation flex items-center gap-24p">
              <button className="size-10 rounded-full flex-c btn-primary btn-prev">
                <IconChevronLeft size={24} />
              </button>
              <button className="size-10 rounded-full flex-c btn-primary btn-next">
                <IconChevronRight size={24} />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TopRelatedProducts;
