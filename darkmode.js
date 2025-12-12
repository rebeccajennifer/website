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

/*
*/
document.addEventListener("DOMContentLoaded", () => {
  // --- Restore saved state (minimal) ---
  if (localStorage.getItem("dark-mode") === "true") {
    document.documentElement.classList.add("dark-mode");
  }

  // --- Your existing working handler (only tiny change: save state) ---
  const moon = document.querySelector('nav .bi-moon');
  console.log("moon element:", moon);

  if (!moon) return;

  moon.addEventListener("click", () => {
    console.log("Moon clicked!");
    // toggle the class exactly as you had it
    const isDarkNow = document.documentElement.classList.toggle("dark-mode");

    // persist minimal: store boolean as string
    localStorage.setItem("dark-mode", isDarkNow ? "true" : "false");
  });
});