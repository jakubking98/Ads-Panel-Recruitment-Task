# Recruitment Task - Ads Panel 

# 1. Description

Ads Panel is an application designed for managing advertisements. Its primary functions include adding, editing, and deleting ads through a user-friendly form. Advertisements are stored as objects in local storage. On the homepage, quotes along with their authors are fetched via an API and dynamically rendered. The application uses React Router DOM to secure access to the admin panel, ensuring that only authorized users with the correct password can access it.

# 2. Demo

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


# 3. Functionalities

### 1. 📢 Advertisement Management

#### 📝 Function: Add New Advertisement

**Description:**  
Enables users to add a new advertisement through a form.

**Inputs:**
- **Advertisement Name:** A unique text field.
- **Advertisement Content:** A text field (up to 500 characters).
- **Start Date & End Date:** Date inputs.
- **Photo Number:** A selection from a predefined set of images.

**Operation:**
1. ✅ Checks if an advertisement with the same name already exists.
2. 🛠 Validates the input data (e.g., text length, proper date format).
3. 💾 Saves the advertisement in `localStorage` using the `saveAdvertisement` function.

**Output:**
- 📌 An updated list of advertisements (retrieved using `getAdvertisements`).
- 🎉 User feedback indicating a successful operation.

---

#### ✏️ Function: Edit Existing Advertisement

**Description:**  
Allows users to modify an existing advertisement.

**Inputs:**
- **Advertisement ID:** The identifier for the advertisement to be edited.
- **Updated Advertisement Data:** New values for name, content, dates, and photo number.

**Operation:**
1. 📋 Loads current data into the form.
2. 🔍 Validates that the updated advertisement name is unique (ignoring the current advertisement).
3. 💾 Updates the advertisement in `localStorage`.

**Output:**
- 🔄 An updated advertisement list displaying the modified advertisement.

---

#### 🗑️ Function: Delete Advertisement

**Description:**  
Enables users to remove an advertisement from the system.

**Inputs:**
- **Advertisement ID:** The identifier of the advertisement to delete.

**Operation:**
1. 🚮 Filters out the advertisement with the given ID.
2. 💾 Updates `localStorage` using the `deleteAdvertisement` function.

**Output:**
- ❌ An updated advertisement list without the removed advertisement.

### 2. 🔐 Authentication and Access Control

#### 🔑 Function: User Login  
**Description:**  
Authenticates users using a password.

**Inputs:**  
- **Password:** Entered via a login form.

**Operation:**
1. ✅ Checks if the password meets the minimum length requirement (**at least 8 characters**).
2. 🔍 Compares the entered password with the preset value (e.g., `"recruitment"`).
3. 🏆 On success, sets `isAuthenticated` to `"true"` in `localStorage` and redirects to the advertisement panel.
4. ❌ On failure, displays an error message.

**Output:**  
- ✅ Grants access to the advertisement panel on successful authentication.  
- ❌ Shows an error message if the password is incorrect.  

---

#### 🔒 Function: ProtectedRoute  
**Description:**  
Secures the advertisement panel so that only authenticated users can access it.

**Inputs:**  
- **Authentication State:** The `isAuthenticated` flag from `localStorage`.

**Operation:**
1. 🔍 Checks whether `isAuthenticated` is set to `"true"`.  
2. 🚫 If not, redirects the user to the home page.  

**Output:**  
- ✅ Access is granted **only to authenticated users**.  

---

### 3. 🧭 Navigation and Menu Logic  

#### 🔄 Function: useMenuLogic  
**Description:**  
Manages the configuration of navigation buttons based on the current route and authentication status.

**Inputs:**  
- **Current Path:** e.g., `/login` or `/advertisements`.  
- **Authentication Status:** Whether the user is logged in.  

**Operation:**
1. 🎯 Determines the button texts and associated actions depending on the current route.  
2. 🔄 Provides functionalities such as logging out or navigating to the **add advertisement** form.  

**Output:**  
- 📋 Returns an object containing the **configuration for the menu buttons** (button texts and actions).  

---

### 4. 📝 Fetching a Quote for the Home Page  

#### 🗨️ Function: QuoteDisplay (invoked in `useEffect`)  
**Description:**  
Fetches a quote along with its author from an external API (e.g., API Ninjas) and updates the component’s state.

**Inputs:**  
- ❌ No direct inputs; it is triggered by the **component lifecycle** (`useEffect`).  

**Operation:**
1. 🌐 Asynchronously fetches data from the external API.  
2. 🔄 Updates the component’s **state variables** (`quote`, `author`, and `loading`) based on the API response.  

**Output:**  
- 🖼️ Displays the **fetched quote and author** on the home page once the data is loaded.  

---

## 5. 📱 Mobile Responsiveness  

**Description:**  
Components and pages dynamically adjust their layout depending on screen size, ensuring a **good user experience** on all devices.

### 📌 Examples:  
- 📱 **On mobile devices**, the advertisement form may be rendered in a **modal panel** (`ModalPanel`).  
- 🖥️ **On larger screens**, the form appears **beside the advertisement list**.  
- 🎨 **Font sizes, spacing, and layouts** are adapted using **media queries** (e.g., `useMediaQuery`) to suit different device sizes.  


# 4. Technologies and Tools  

### ⚙️ Build Tool & Development Server  
- **Vite** 🚀  
  - Provides a fast development environment with **Hot Module Replacement (HMR)**.  
  - Optimized builds for production.  

### 👨‍💻 Programming Language  
- **TypeScript** ✨  
  - Ensures **static type-checking** for a more robust codebase.  
- **ESLint** 🔍 (Used for linting, with the following plugins:)  
  - `eslint-plugin-react-hooks`  
  - `eslint-plugin-react-refresh`  
  - `@eslint/js`  

### 🚀 Deployment  
- **gh-pages** 🌍  
  - Used to deploy the project (**typically to GitHub Pages**).  

---

## 📦 Frameworks & Libraries  

### 🎨 User Interface Framework  
- **React** ⚛️ (Version **17.0.2**)  
  - Core library for building the UI.  
- **React DOM** 🏗️  
  - Handles rendering of React components in the browser.  
- **React Router DOM** 🌍  
  - Manages routing within the application.  

### 🖌️ UI Component Library  
- **Material-UI** 🎨 (Version **4.x**)  
  - Provides pre-built UI components and styling.  
  - Includes the following packages:  
    - `@material-ui/core`  
    - `@material-ui/icons`  
    - `@material-ui/styles`  

### 📚 Additional Dependencies  
- **History** 🕰️  
  - Likely used for managing session history or integrating with **React Router**.  
- **Type Definitions** 📜  
  - `@types/react`  
  - `@types/react-dom`  

### ⚡ Vite Plugin for React  
- `@vitejs/plugin-react`  
  - Enhances Vite with **features specific to React**.  

---

## 📜 Scripts  

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Starts the Vite **development server**. |
| `npm run build` | 🏗️ Compiles TypeScript (`tsc -b`) and builds the project with Vite. |
| `npm run lint` | 🔍 Runs **ESLint** to check the code. |
| `npm run preview` | 👀 Previews the **built project** before deployment. |
| `npm run deploy` | 🌍 Deploys the built project using **gh-pages**. |


# 5. ⚙️ Prerequisites for Running the Project  

### 🌐 Node.js and npm  

- **Node.js**: The runtime environment required for executing JavaScript outside the browser.  
  **Recommended Version**: Node.js version **16.x or higher**.
- **npm (Node Package Manager)**: Comes bundled with Node.js, and is required to install project dependencies.  

You can verify the versions of Node.js and npm using the following commands:

```
node -v
npm -v
```
### 📦 Git
Git: Required for managing the project's source code and handling version control, including deployment via GitHub Pages.
You can verify the Git installation using:

```
git --version
```

### 📋 Project Dependencies
Before running the project, you need to install the necessary Node.js dependencies listed in the package.json. To do this:

Clone the repository or navigate to the project directory.
Run the following command to install all dependencies:
```
npm install
```
This will install both development dependencies (e.g., TypeScript, ESLint, Vite, etc.) and runtime dependencies (e.g., React, Material-UI, etc.).

### 🛠️ Steps to Set Up the Project
Clone the repository (if not done yet):
```
git clone <repository_url>
cd <project_directory>
```

Install dependencies:
```
npm install
```
Start the development server:

```
npm run dev
```
This will launch the application in development mode and you can access it in your browser.

### 📋 Summary of Requirements
Node.js (v16.x or higher)
npm (Node Package Manager)
Git (for version control and deployment)
Code editor (Visual Studio Code recommended)
(Optional) Global installations for TypeScript, Vite, gh-pages

