"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import { useToggle } from "@/hooks";
import { navMenu } from "@public/data/navMenu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    open: searchOpen,
    handleToggle: handleSearchToggle,
    ref: searchRef,
  } = useToggle();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-b-neutral-1 border-b-b-neutral-1"
          : "bg-b-neutral-4 border-b border-b-neutral-1"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          HatBazar
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navMenu?.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`${
                path === item.link ? "text-primary" : "text-white"
              } hover:text-primary transition`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 ">
          <div ref={searchRef} className="relative">
            <button
              onClick={handleSearchToggle}
              className="flex-c btn-c btn-md"
            >
              <IconSearch size={24} />
            </button>
            {searchOpen && (
              <div className="absolute top-16 right-0 w-[300px] bg-secondary p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 bg-black text-white rounded-full"
                />
              </div>
            )}
          </div>
          <Link href={"/cart"} className="relative">
            <IconShoppingCart size={24} />
            <span className="absolute -top-4 -right-5 px-1 bg-primary text-black rounded-full flex-c">
              {cartItems.length}
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-primary"
          >
            {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-900 p-4 flex flex-col items-center md:hidden">
          {navMenu.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-white hover:text-primary py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
