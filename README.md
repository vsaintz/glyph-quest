### Glyph-Quest

Glyph-Quest is a mobile application, built with React Native and Expo. It leverages the common QR code as a trigger to load and display 3D models directly on a user's device. The core functionality involves using the phone's camera to scan a QR code that contains a URL to a 3D model file (such as .glb or .gltf). Upon a successful scan, the app fetches the model and renders it in a real-time, interactive viewer. Users can then manipulate the object through intuitive touch gestures including rotation, panning, and zooming to allow for a detailed inspection from any angle.

To create a more persistent experience, every model you discover is automatically saved to a personal in-app gallery. This allows you to easily revisit, review, and show off your collected models without needing to find the original QR code again. The project demonstrates a practical use case for simple augmented reality, ideal for educational purposes, product showcases, or sharing artistic creations.


### Features

* **QR Code Scanning:** Instantly scan any QR code using your device's camera.
* **Instant 3D Visualization:** If a QR code contains a valid link to a 3D model (`.glb`, `.gltf`), it comes to life in an interactive viewer.
* **Interactive Controls:** Freely **rotate**, **pan**, and **zoom** in on models to see every detail up close.
* **Model Gallery:** Every model you discover is automatically saved to your personal collection, so you can revisit your finds anytime.


### Tech Stack

This project is built with a modern, cross-platform stack

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)


### Installation

**Clone the repository**

   ```bash
   git clone https://github.com/vsaintz/glyph-quest.git
   cd glyph-quest
   ```

**Install dependencies**
   ```bash
   npm install
   ```

**Run the application**
   ```bash
   npx expo start
   ```

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.