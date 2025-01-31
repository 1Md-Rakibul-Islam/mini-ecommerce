import Link from "next/link";
import { currentYear } from "@/utils/currentYear";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChevronRight,
} from "@tabler/icons-react";
import { navMenu } from "@public/data/navMenu";

const Footer = () => {
  return (
    <footer className="relative section-pt overflow-hidden bg-b-neutral-3">
      <div className="container">
        <div className="relative z-10 lg:px-10">
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 4xl:gap-x-6 max-4xl:gap-40p border-y-2 border-dashed border-shap py-80p">
            <div>
              <Link
                href="/"
                className="heading-3 text-w-neutral-1 hover:text-secondary transition-1 mb-24p"
              >
                HatBazar
              </Link>
              <p className="text-base text-w-neutral-3 mb-32p">
                Become visionary behind a sprawling metropolis in Metropolis
                Tycoon Plan empire progress.
              </p>
              <div className="flex items-center gap-3">
                <Link href="#" className="btn-socal-primary">
                  <IconBrandFacebook />
                </Link>
                <Link href="#" className="btn-socal-primary">
                  <IconBrandTwitter />
                </Link>
                <Link href="#" className="btn-socal-primary">
                  <IconBrandInstagram />
                </Link>
                <Link href="#" className="btn-socal-primary">
                  <IconBrandYoutube />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="heading-4 text-w-neutral-1 whitespace-nowrap mb-24p">
                Main pages
              </h4>
              <ul className="grid grid-cols-1 sm:gap-y-16p gap-y-2 *:flex *:items-center">
                {navMenu?.slice(0, 4)?.map((item, idx) => (
                  <li
                    key={idx}
                    className="group hover:translate-x-2 -translate-x-2 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit"
                  >
                    <IconChevronRight
                      size={24}
                      className="group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"
                    />
                    <Link
                      href={item?.link}
                      className="text-m-regular text-w-neutral-3"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="heading-4 text-w-neutral-1 whitespace-nowrap  mb-3">
                Email Us
              </h4>
              <Link
                href="mailto:debra.holt@example.com"
                className="text-base text-w-neutral-3 mb-32p"
              >
                debra.holt@example.com
              </Link>
              <h4 className="heading-5 whitespace-nowrap mb-3">Contact Us</h4>
              <Link
                href="tel:207555-0119"
                className="text-base text-w-neutral-3"
              >
                (207) 555-0119
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-24p py-30p">
            <div className="flex items-center flex-wrap">
              <p className="text-base text-w-neutral-3">
                Copyright ©
                <span className="currentYear span">{currentYear}</span>
              </p>
              <div className="w-1px h-4 bg-shap mx-24p"></div>
              <p className="text-base text-white">
                Develop By {""}
                <Link href="#" className="text-primary hover:underline a">
                  Rakibul Islam
                </Link>
              </p>
            </div>
            <div className="flex items-center text-base gap-24p text-white">
              <Link href="#" className="hover:text-primary transition-1 block">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-1 block">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 xl:block hidden"
          data-aos="zoom-out-right"
          data-aos-duration="800"
        >
          {/* <Image
            className="3xl:w-[580px] xxl:w-[500px] xl:w-[400px] h-auto"
            width={580}
            src={footerIllustration}
            alt="footer"
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
