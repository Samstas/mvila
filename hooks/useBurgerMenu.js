"use client";

import { useState } from "react";

export function useBurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openBurgerMenu() {
    setIsNavOpen(true);
  }

  function closeBurgerMenu() {
    setIsNavOpen(false);
  }

  return { isNavOpen, openBurgerMenu, closeBurgerMenu };
}
