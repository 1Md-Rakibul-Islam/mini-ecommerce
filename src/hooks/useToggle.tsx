"use client";

import { useEffect, useRef, useState } from "react";

const useToggle = (): {
  open: boolean;
  handleToggle: () => void;
  ref: React.RefObject<HTMLDivElement>;
} => {
  // State to track the toggle state
  const [open, setOpen] = useState<boolean>(false);

  // Ref to the element to check for outside clicks
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Event handler for click outside events.
   * @param event - The mouse event.
   */
  const handleClickOutside = (event: MouseEvent) => {
    // If the click target is outside the ref element, close the toggle
    if (
      window.scrollY > 100 ||
      (ref.current && !ref.current.contains(event.target as Node))
    ) {
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
      window.addEventListener("scroll", handleScroll);
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
