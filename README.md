# Quiz Master

A simple quiz application built with **React**, **TypeScript**, **Vite**, **Zustand**, and **MUI (Material UI)**.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Setup](#project-setup)
3. [Folder Structure](#folder-structure)
4. [Usage](#usage)

---

## Overview

This project demonstrates a **Millionaire-style quiz game** that uses:

- **React + Vite** for a fast development environment
- **TypeScript** for type safety
- **Zustand** for global state management
- **MUI** for UI components and theming

Initially, the app uses **hardcoded data** from JSON files (`javascriptQuestions.json`, `historyQuestions.json`) located in the `data` folder. We will enhance these data sources and possibly fetch from APIs in the future.

---

## Project Setup

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/quiz-master.git
   cd quiz-master
   ```
2. **Install dependencies:**
   ```bash
   yarn
   ```
3. **Start the development server:**
   ```bash
   yarn dev
   ```

---

## Folder Structure

```text
quiz-master/
├── data/
│   ├── historyQuestions.json
│   └── javascriptQuestions.json
├── node_modules/
├── src/
│   ├── assets/
│   │   └── (images, icons, etc.)
│   ├── components/
│   │   ├── Info.tsx            # Displays quiz progress
│   │   ├── QuizGame.tsx        # Main quiz game logic (questions, answers)
│   │   ├── QuizResults.tsx     # End-of-quiz results screen
│   │   └── ThemeSwitcher.tsx   # SpeedDial or UI to switch between multiple themes
│   ├── store/
│   │   ├── quiz/
│   │   │   ├── basicQuizStore.ts
│   │   │   ├── index.ts
│   │   │   ├── initialValues.ts
│   │   │   └── store.types.ts
│   │   └── theme/
│   │       ├── index.ts
│   │       ├── themeStore.ts
│   │       ├── themes.ts
│   │       └── store.types.ts
│   │
│   ├── App.tsx
│   └── ThemeWrapper.tsx        # Wraps the app with MUI ThemeProvider
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
└── yarn.lock

```

---

## Usage

1. **Play the Game:**

- Answer each question.
- Navigate through Next / Previous buttons.
- View the final score on the results screen.
- Start over by clicking "reset".

2. **Change themes:**
   Use SpeedDial component to toggle between different themes in real-time.
