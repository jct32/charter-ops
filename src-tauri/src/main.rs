#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(startingAirport: &str, minDistance: &str, maxDistance: &str, maxPax: &str, maxLegs: &str) {
    println!("Airport: {}\nMin Distance: {}\nMax Distance: {}\nMax Pax: {}\nMax Legs: {}", startingAirport, minDistance, maxDistance, maxPax, maxLegs);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
