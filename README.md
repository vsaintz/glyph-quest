### Glyph-Quest

Glyph-Quest is a mobile application developed for our college’s tech-themed treasure hunt. Built with React Native and Expo, the app uses QR codes placed around the campus to load 3D models that contain riddles or hints leading to the next location.

The integrated 3D viewer allows users to rotate, pan, and zoom each model, making it possible to examine the riddle from multiple angles. All scanned models are automatically saved in app gallery, participants can revisit previous clues at any time without needing to rescan the corresponding QR code.

### Features

- **QR Code Scanning**: Scan QR codes directly using the device’s camera.

- **3D Visualization**: If the QR code contains a valid .glb model link, the app loads it in an 
interactive viewer.

- **Interactive Controls**: Rotate, pan, and zoom the model as needed.

- **Model Gallery**: All scanned models are automatically saved to the user’s collection for later access.


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