const { invoke } = window.__TAURI__.tauri;

let startingAirport;
let minDistance;
let maxDistance;
let maxPax;
let maxLegs;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  await invoke("greet", {
    startingAirport: startingAirport.value,
    minDistance: minDistance.value,
    maxDistance: maxDistance.value,
    maxPax: maxPax.value,
    maxLegs: maxLegs.value
  });
}

window.addEventListener("DOMContentLoaded", () => {
  startingAirport = document.querySelector("#starting-apt");
  minDistance = document.querySelector("#min-dist");
  maxDistance = document.querySelector("#max-dist");
  maxPax = document.querySelector("#max-pax");
  maxLegs = document.querySelector("#max-legs");
  document
    .querySelector("#route-btn")
    .addEventListener("click", () => greet());
});

