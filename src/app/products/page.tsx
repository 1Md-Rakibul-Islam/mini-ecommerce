import AllProducts from "@/components/sections/home/AllProducts";
import Breadcrumb from "@/components/shared/Breadcumb";
import { headerBannerType, NavLinkProps } from "@/types/interface";

const Page = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "", label: "Products" },
  ];

  const headerData: headerBannerType = {
    title: "Products",
    navLinks,
  };

  return (
    <main>
      <Breadcrumb breadcrumb={headerData} />
      <AllProducts />
    </main>
  );
};

export default Page;
