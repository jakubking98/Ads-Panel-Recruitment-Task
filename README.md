# Recruitment Task - Ads Panel 

## 1. Description

Ads Panel is an application designed for managing advertisements. Its primary functions include adding, editing, and deleting ads through a user-friendly form. Advertisements are stored as objects in local storage. On the homepage, quotes along with their authors are fetched via an API and dynamically rendered. The application uses React Router DOM to secure access to the admin panel, ensuring that only authorized users with the correct password can access it.

## 2. Demo

Link to the working version:

[Ads Panel in Github Pages](https://jakubking98.github.io/Ads-Panel-Recruitment-Task/)

Visual preview on the screen

Home Page Preview
![image](https://github.com/user-attachments/assets/a5722fa1-b5f7-4fd5-a7f6-788c92bc32bf)

Login Preview
![image](https://github.com/user-attachments/assets/bdba1134-816a-4f7d-8c94-e88a416b0ea2)

Advertisement Page Preview
![image](https://github.com/user-attachments/assets/f164a57d-9277-4db7-805e-55a78785cefc)

NewAdvertisementPage
![image](https://github.com/user-attachments/assets/bb147bd0-b6ff-402a-b109-8d4f27b24324)


## 3. Functionalities

1. Zarządzanie reklamami

Funkcja: Dodawanie nowej reklamy

Opis: Umożliwia użytkownikowi dodanie nowej reklamy poprzez wypełnienie formularza.

Wejścia:
Nazwa reklamy (unikalna, tekst)
Treść reklamy (tekst, do 500 znaków)
Data rozpoczęcia i zakończenia (daty)
Numer zdjęcia (wybór z predefiniowanej listy)

Działanie:
Sprawdzenie, czy reklama o podanej nazwie już istnieje.
Walidacja danych (np. długość tekstu, poprawność dat).
Zapis reklamy w localStorage (funkcja saveAdvertisement).
















Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
