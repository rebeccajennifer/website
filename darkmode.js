//______________________________________________________________________
//______________________________________________________________________
//       _   __   _   _ _   _   _   _         _
//  |   |_| | _  | | | V | | | | / |_/ |_| | /
//  |__ | | |__| |_| |   | |_| | \ |   | | | \_
//   _  _         _ ___  _       _ ___   _                    / /
//  /  | | |\ |  \   |  | / | | /   |   \                    (^^)
//  \_ |_| | \| _/   |  | \ |_| \_  |  _/                    (____)o
//______________________________________________________________________
//______________________________________________________________________
//
//----------------------------------------------------------------------
//  Copyright 2025, Rebecca Rashkin
//  -------------------------------
//  This code may be copied, redistributed, transformed, or built
//  upon in any format for educational, non-commercial purposes.
//
//  Please give me appropriate credit should you choose to use this
//  resource. Thank you :)
//----------------------------------------------------------------------
//
//______________________________________________________________________
//  //\^.^/\\  //\^.^/\\  //\^.^/\\  //\^.^/\\  //\^.^/\\  //\^.^/\\
//______________________________________________________________________
//  DESCRIPTION
//  Toggle dark mode.
//______________________________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  const moon = document.querySelector('nav .bi-moon, nav .bi-sun');

  // Helper to swap icons
  const updateIcon = (is_dark) => {
    if (is_dark) {
      moon.classList.replace('bi-moon', 'bi-sun');
    } else {
      moon.classList.replace('bi-sun', 'bi-moon');
    }
  };

  // 1. Restore saved state
  if (localStorage.getItem("dark-mode") === "true") {
    document.documentElement.classList.add("dark-mode");
    if (moon) updateIcon(true);
  }

  if (!moon) return;

  // 2. Click Handler
  moon.addEventListener("click", () => {
    const is_dark_now = document.documentElement.classList.toggle("dark-mode");

    // Swap the icon class
    updateIcon(is_dark_now);

    // Save state
    localStorage.setItem("dark-mode", is_dark_now ? "true" : "false");
  });
});