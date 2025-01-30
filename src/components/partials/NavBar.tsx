"use client";

import Link from "next/link";
import { useToggle } from "@/hooks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navMenu } from "@public/data/navMenu";
import AnimateHeight from "react-animate-height";
import {
  IconBell,
  IconChevronDown,
  IconMenu2,
  IconShoppingCart,
  IconSpeakerphone,
} from "@tabler/icons-react";

const NavBar = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState<number | null>(null);
  const [height, setHeight] = useState<string | number>(0);
  const [scrolled, setScrolled] = useState(false);
  const {
    open: userOpen,
    handleToggle: userToggle,
    ref: userRef,
  } = useToggle();

  const {
    open: hamburgerOpen,
    handleToggle: hamburgerToggle,
    ref: hamburgerRef,
  } = useToggle();

  const toggleHandle = (idx: number) => {
    if (toggle === idx) {
      setToggle(null);
    } else {
      setToggle(idx);
    }
  };

  const handleHover = (idx: number) => {
    toggleHandle(idx);
  };

  // scroll to add navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Add the event listener
    document.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface MenuItem {
    id: number;
    name: string;
    isSubMenu: boolean;
    link?: string; // Link is optional for parent menu items
    subMenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
  }

  interface SubMenuItem {
    id: number;
    name: string;
    link: string;
  }

  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubMenu && menu.subMenu) {
      return menu.subMenu.some((submenu: SubMenuItem) => path === submenu.link);
    }
    return path === menu.link;
  };

  const loggedUser = {
    name: "John Doe",
    email: "dWZ2l@example.com",
    // image: userImage,
    followers: 270,
  };

  return (
    <header
      id="header"
      className={`${
        scrolled || !hamburgerToggle
          ? "header-animation shadow-2xl bg-secondary"
          : "bg-transparent"
      } absolute w-full z-[999] `}
    >
      <div className="mx-auto relative">
        <div id="header-nav" className="w-full px-24p bg-b-neutral-3 relative">
          <div className="flex items-center justify-between gap-x-2 mx-auto py-20p">
            <nav className="relative xl:grid xl:grid-cols-12 flex justify-between items-center gap-24p text-semibold w-full">
              <div className="3xl:col-span-6 xl:col-span-5 flex items-center 3xl:gap-x-10 gap-x-5">
                <Link href="/" className="shrink-0">
                  {/* <Image
                    className="xl:w-[170px] sm:w-36 w-30 h-auto shrink-0"
                    width={170}
                    src={logo}
                    alt="brand"
                  /> */}
                </Link>
                <form className="hidden lg:flex items-center sm:gap-3 gap-2 min-w-[300px] max-w-[670px] w-full px-20p py-16p bg-b-neutral-4 rounded-full">
                  <span className="flex-c icon-20 text-white">
                    <i className="ti ti-search"></i>
                  </span>
                  <input
                    autoComplete="off"
                    className="bg-transparent w-full"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                </form>
              </div>
              <div className="3xl:col-span-6 xl:col-span-7 flex items-center xl:justify-between justify-end w-full">
                <Link
                  href="/blogs"
                  className="hidden xl:inline-flex items-center gap-3 pl-1 py-1 pr-6  rounded-full bg-[rgba(242,150,32,0.10)] text-w-neutral-1 text-base"
                >
                  <span className="size-48p flex-c bg-primary text-b-neutral-4 rounded-full">
                    <IconSpeakerphone stroke={1.5} size={32} />
                  </span>
                  News For You
                </Link>
                <div className="flex items-center lg:gap-x-40p gap-x-2">
                  <div className="hidden lg:flex items-center gap-1 shrink-0">
                    <Link
                      href="/shopping-cart"
                      className="btn-c btn-c-xxl btn-c-dark-outline"
                    >
                      <IconShoppingCart stroke={1.5} size={32} />
                    </Link>
                    <Link
                      href="/chat"
                      className="btn-c btn-c-xxl btn-c-dark-outline"
                    >
                      <IconBell stroke={1.5} size={32} />
                    </Link>
                  </div>
                  <div
                    ref={userRef}
                    className="dropdown relative shrink-0 lg:block hidden"
                  >
                    <button
                      onClick={userToggle}
                      className="dropdown-toggle gap-24p"
                    >
                      <span className="flex items-center gap-3">
                        {/* <Image
                          className="size-60p rounded-full shrink-0"
                          src={loggedUser.image}
                          alt="profile"
                        /> */}
                        <span className="text-left">
                          <span className="text-m-medium text-w-neutral-1 mb-1">
                            {loggedUser.name}
                          </span>
                          <span className="text-sm text-w-neutral-4 block">
                            {loggedUser.followers} Followars
                          </span>
                        </span>
                      </span>
                      <span
                        className={` ${
                          userOpen ? "rotate-180" : ""
                        } btn-c btn-sm text-w-neutral-4 icon-32 transition-1`}
                      >
                        <IconChevronDown stroke={1.5} size={32} />
                      </span>
                    </button>

                    {userOpen && (
                      <div className="dropdown-content">
                        <Link href="/profile" className="dropdown-item">
                          Profile
                        </Link>
                        <Link
                          href="/profile/settings"
                          className="dropdown-item"
                        >
                          Settings
                        </Link>
                        <button type="button" className="dropdown-item">
                          Logout
                        </button>
                        <Link href="/contact-us" className="dropdown-item">
                          Help
                        </Link>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={hamburgerToggle}
                    className="lg:hidden btn-c btn-c-xxl btn-c-dark-outline nav-toggole shrink-0"
                  >
                    <IconMenu2 stroke={1.5} size={32} />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <nav className="w-full flex justify-between items-center">
          <div
            className={` ${
              hamburgerOpen
                ? "md:translate-y-0 max-md:translate-x-0 visible"
                : "md:translate-y-full max-md:-translate-x-full invisible"
            } small-nav fixed top-0 left-0 h-screen w-full shadow-lg z-[999] transform transition-transform ease-in-out duration-500 `}
          >
            <div
              ref={hamburgerRef}
              className="absolute z-[5] inset-0 bg-b-neutral-3 flex-col-c min-h-screen max-md:max-w-[400px]"
            >
              <div className="container max-md:p-0 md:overflow-y-hidden overflow-y-scroll scrollbar-sm lg:max-h-screen">
                <div className="p-40p">
                  <div className="flex justify-between items-center mb-10">
                    <Link href="/">
                      {/* <Image
                        width={142}
                        className="w-[142px] h-auto"
                        src={logo}
                        alt="GameCo"
                      /> */}
                    </Link>
                    <button
                      onClick={hamburgerToggle}
                      className="nav-close btn-c btn-c-md btn-c-primary"
                    >
                      <i className="ti ti-x"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-12 gap-x-24p gap-y-10 sm:p-y-48p">
                    <div className="xl:col-span-8 md:col-span-7 col-span-12">
                      <div className="overflow-y-scroll overflow-x-hidden scrollbar scrollbar-sm xl:max-h-[532px] md:max-h-[400px] md:pr-4">
                        <ul className="flex flex-col justify-center items-start gap-20p text-w-neutral-1">
                          {navMenu?.map((menu, idx) => (
                            <li
                              key={idx}
                              className={` ${
                                isMenuActive(menu) && !menu?.isSubMenu
                                  ? "text-primary"
                                  : "text-white"
                              } ${
                                menu?.isSubMenu
                                  ? "sub-menu mobail-submenu"
                                  : "mobail-menu"
                              }`}
                              onClick={() => handleHover(idx)}
                            >
                              {menu?.isSubMenu ? (
                                <span
                                  onClick={() =>
                                    setHeight(height === 0 ? "auto" : 0)
                                  }
                                >
                                  <span className="mobail-submenu-btn">
                                    <span className="submenu-btn">
                                      {menu?.name}
                                    </span>
                                    <span
                                      className={`${
                                        toggle === idx
                                          ? "rotate-0"
                                          : "rotate-180"
                                      } collapse-icon mobail-submenu-icon`}
                                    >
                                      <IconChevronDown stroke={1.5} size={24} />
                                    </span>
                                  </span>
                                  <AnimateHeight
                                    duration={500}
                                    height={toggle === idx ? "auto" : 0}
                                  >
                                    <ul className="grid gap-y-2 px-16p pt-2">
                                      {menu?.subMenu?.map((subItem, idx) => (
                                        <li key={idx}>
                                          <Link
                                            onClick={hamburgerToggle}
                                            href={subItem?.link}
                                            className={` ${
                                              path === subItem.link
                                                ? "text-primary"
                                                : "text-white"
                                            } text-base hover:text-primary transition-1`}
                                          >
                                            - {subItem?.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </AnimateHeight>
                                </span>
                              ) : (
                                <Link
                                  onClick={hamburgerToggle}
                                  href={menu?.link ? menu?.link : "#"}
                                  className={`${
                                    path === menu.link
                                      ? "text-primary"
                                      : "text-white"
                                  } `}
                                >
                                  {menu?.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="xl:col-span-4 md:col-span-5 col-span-12">
                      <div className="flex flex-col items-baseline justify-between h-full">
                        <form className="w-full flex items-center justify-between px-16p py-2 pr-1 border border-w-neutral-4/60 rounded-full">
                          <input
                            className="placeholder:text-w-neutral-4 bg-transparent w-full"
                            type="text"
                            name="search-media"
                            placeholder="Search Media"
                            id="search-media"
                          />
                          <button
                            type="submit"
                            className="btn-c btn-c-md text-w-neutral-4"
                          >
                            <i className="ti ti-search"></i>
                          </button>
                        </form>
                        <div className="mt-40p">
                          {/* <Image className="mb-16p" src={logo} alt="logo" /> */}
                          <p className="text-base text-w-neutral-3 mb-32p">
                            Become visionary behind a sprawling metropolis in
                            Metropolis Tycoon Plan empire progress.
                          </p>
                          <div className="flex items-center flex-wrap gap-3">
                            <Link href="#" className="btn-socal-primary">
                              <i className="ti ti-brand-facebook"></i>
                            </Link>
                            <Link href="#" className="btn-socal-primary">
                              <i className="ti ti-brand-twitch"></i>
                            </Link>
                            <Link href="#" className="btn-socal-primary">
                              <i className="ti ti-brand-instagram"></i>
                            </Link>
                            <Link href="#" className="btn-socal-primary">
                              <i className="ti ti-brand-discord"></i>
                            </Link>
                            <Link href="#" className="btn-socal-primary">
                              <i className="ti ti-brand-youtube"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-close min-h-[200vh] navbar-overly"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
