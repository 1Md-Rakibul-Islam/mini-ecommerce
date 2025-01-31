"use client";

import { useEffect, useRef, useState } from "react";

const useToggle = (): {
  open: boolean;
  handleToggle: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.RefObject<HTMLDivElement> | any;
} => {
  const [open, setOpen] = useState<boolean>(false);

  // Ref to the element to check for outside clicks
  const ref = useRef<HTMLDivElement>(null); // Initialize with null, but type is HTMLDivElement

  /**
   * Event handler for click outside events.
   * @param event - The mouse event.
   */
  const handleClickOutside = (event: MouseEvent) => {
    // Check if ref.current exists before accessing it
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 180) {
      setOpen(false);
    }
  };

  // Add and remove the click outside event listener on mount and unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll); // Fix: Use removeEventListener
    };
  }, []);

  /**
   * Function to toggle the toggle state.
   */
  const handleToggle = () => {
    setOpen(!open);
  };

  // Return the state, toggle function, and ref
  return { open, handleToggle, ref };
};

export default useToggle;
