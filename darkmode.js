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

//document.addEventListener("DOMContentLoaded", () => {
//  const btn = document.querySelector('#FLUX');
//  if (!btn) return;
//
//  btn.addEventListener("click", (e) => {
//    e.preventDefault();
//    btn.textContent = "Hello, world!";
//    document.documentElement.classList.toggle("dark-mode");
//  });
//});
//

document.addEventListener("DOMContentLoaded", () => {
  // Restore dark mode from previous sessions
  const saved = localStorage.getItem("dark-mode");
  if (saved === "true") {
    document.documentElement.classList.add("dark-mode");
  }

  // Find the Quarto moon icon
  const icon = document.querySelector("nav .bi-moon");
  if (!icon) return;

  // The clickable element is the parent <a>
  const btn = icon.closest("a");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    document.documentElement.classList.toggle("dark-mode");

    // Save preference
    const isDark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDark);
  });
});



