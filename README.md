# Todo App - React Native Project

Welcome to the Todo App project! This README provides all the necessary information to get started with developing and using the app.
![screens-design](https://github.com/akhilork/todoak/assets/51960205/d15e536a-894f-4d68-a6d7-1b8fac7482fa)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the App](#running-the-app)
6. [Project Structure](#project-structure)
7. [Usage](#usage)

## Introduction

The Todo App is a simple yet effective React Native application for managing daily tasks. Users can create, read, update, and delete tasks, helping them stay organized and productive.

## Features

- Add new tasks
- Mark tasks as complete or incomplete
- Edit existing tasks
- Delete tasks
- Persistent storage of tasks
- Simple and intuitive user interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 12.x)
- npm or Yarn
- React Native CLI
- Android Studio (for Android development) or Xcode (for iOS development)

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```sh
   git clone https://github.com/akhilork/todoak.git
   cd todoak
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up the necessary environment for iOS or Android development by following the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup).

## Running the App

To run the app on an emulator or physical device:

### iOS

1. Navigate to the `ios` directory and install pods:

   ```sh
   cd ios
   pod install
   cd ..
   ```

2. Run the app:
   ```sh
   npm run ios
   ```

### Android

1. Start the Android emulator or connect a physical device.

2. Run the app:
   ```sh
   npm run android
   ```

## Project Structure

The project structure is as follows:

```bash
todoak/
├── android/        # Android native code
├── ios/            # iOS native code
├── src/            # React Native code
│   ├── assets/     # Images, fonts, etc.
│   ├── components/ # Reusable components
│   ├── navigation/ # Navigation setup
│   ├── screens/    # Screen components
│   ├── store/      # State management
│   ├── styles/     # Common styles, colors etc.
│   ├── types/      # Common types
│   └── utils/      # Reusable constants and  utils
├── .gitignore
├── App.tsx
├── app.json
├── babel.config.js
├── index.js
├── package.json
└── README.md
```

## Usage

- **Adding a Task:** Tap the "+" button, enter the task details, and save.
- **Marking as Complete:** Tap on the checkbox next to a task to mark it as complete.
- **Editing a Task:** Tap on the "ellipsis icon" to edit its details.
- **Deleting a Task:** ap on the "ellipsis icon" to delete.

---

Thank you for using the Todo App! If you have any questions or feedback, please feel free to reach out.
