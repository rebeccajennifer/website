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
//  Copyright 2026, Rebecca Rashkin
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
    if (!moon) return;

    if (is_dark) {
      moon.classList.replace('bi-moon', 'bi-sun');
    } else {
      moon.classList.replace("bi-sun", "bi-moon");
    }
  };

  // 1. Restore saved state or use system preference
  const saved = localStorage.getItem("dark-mode");

  let is_dark;

  if (saved !== null) {
    is_dark = saved === "true";
  } else {
    is_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  document.documentElement.classList.toggle("dark-mode", is_dark);
  updateIcon(is_dark);

  // Follow system theme changes if the user has not chosen a preference
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  media.addEventListener("change", (event) => {
    if (localStorage.getItem("dark-mode") !== null) {
      return;
    }

    const is_dark = event.matches;

    document.documentElement.classList.toggle("dark-mode", is_dark);
    updateIcon(is_dark);
  });

  if (!moon) return;

  // 2. Click handler
  moon.addEventListener("click", () => {
    const is_dark_now =
      document.documentElement.classList.toggle("dark-mode");

    updateIcon(is_dark_now);

    // Save explicit user preference
    localStorage.setItem(
      "dark-mode",
      is_dark_now ? "true" : "false"
    );
  });
});