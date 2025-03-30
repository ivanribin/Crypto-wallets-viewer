# Crypto Wallets Viewer
This website allow look posts from api, connect to crypto wallets (Ethereum and Cardano) by browser extensions (Metamask and Lace). Website have a settings page.

# Installing and run
Clone the repository:
```
git clone https://github.com/ivanribin/Crypto-wallets-viewer.git
```
Go to the project folder:
```
cd Crypto-wallets-viewer
```
Install dependencies:
```
npm install
```
Start application:
```
npm run dev
```

## Usage
Website contains three pages:
### Posts Page
On this page loads user posts from fake-API 
```
https://jsonplaceholder.typicode.com/posts
```

After loading all posts are displayed on page with pagination. Posts count on one pagination page can set in Settings Page. 

Page has search input, which filters all posts by client's query.

### Wallets Page
On this page client can connect to Ethereum or Cardano wallet from browser extensions (Metamask and Lace). If client hasn't some extension, he get notification about installing. 

Click on connect button start connection to wallet from extension. If client log in account in extension, data load automatically, else extension opened and requested log in.

After successfully connection on page show wallets address and balance.

There are copy button and delete button in any connected wallet block. When pressed on copy button, wallet address copy to buffer. When pressed on delete button, all connected wallet data cleared.  

### Settings Page
On this page client can set website appearance and some control for Posts and Wallets pages.

#### Appearance settings
1. Color theme.
2. Font size.
3. Font family.

#### Control settings
1. Posts count in every pagination page in Posts Page.
2. Cardano wallet block active status in Wallets Page.

## Technologies

1. **HTML**: Used for the structure of the web page.
2. **CSS**: Used to style elements and create visual design.
3. **JavaScript**: Used to add interactivity, handle events, and dynamically change the page content.
4. **TypeScript**: Provides static typing and enhances code quality and maintainability in your React project.
5. **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
6. **Vite**: A modern build tool that provides a faster and leaner development experience for projects using frameworks like React.
7. **ESLint**: A tool for identifying and fixing problems in your JavaScript/TypeScript code, promoting coding standards.
8. **Prettier**: An opinionated code formatter to ensure consistency in code style across your project.
9. **React Router**: Used for handling routing in your React application, enabling navigation between different components.
10. **State Management (e.g., Redux, Context API)**: For managing global state in a more efficient way across components, allowing for easier data sharing.


## Main Files
1. **index.html**: The main HTML page that serves as the entry point for the application.
2. **/assets**: Directory containing stylesheets and other static assets for the app's user interface.
3. **/src/**: Contains the React components and TypeScript files that implement the app's functionality and logic.
4. **package.json**: Configuration file for managing project dependencies and scripts.
5. **tsconfig.json**: TypeScript configuration file that defines compiler options and project structure.

