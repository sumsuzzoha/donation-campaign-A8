#Livesite Link: https://donation-camp-sumsuzzoha-9696e7.netlify.app/

## Project features

1. Local Development

- To serve an App after creating your project, you will need a local development environment. The webpack development server and a watcher that automatically reloads your application whenever something is changed in your codebase.

- Create React App provides you with a lot of handy development features such as hot and fast reload that enables you to reload only the updated portion of the application. 

2. Asset Import
- CSS files, images, and fonts from your JavaScript modules that allow you to bundle files used in your application can be imported. Create React App will transfer these files into the build folder once the application has been constructed.

3. Styling
- In React, whenever an application is built, all the CSS files are concatenated into a single bundle and placed in the build folder.

- Create React App also supports CSS modules. CSS modules are defined as files with the extension *.module.css. Because Create React App generates distinct class selectors in the final CSS files, we can avoid CSS selector conflicts. 

- You can also import Sass .scss files if you choose to use CSS preprocessors. You will, however, need to install the node-sass package individually.


4. Using about React Hooks

- initialize our state by calling  useState in our function component.
- useState accepts an initial state and returns two values
    - The current state.
    - A function that updates the state.

- The useEffect Hook allows you to perform side effects in your components.
   - useEffect accepts two arguments. The second argument is optional.
   - useEffect(<function>, <dependency>)

- React Context is a way to manage state globally.
   - To create context, you must Import createContext and initialize it:
   - In order to use the Context in a child component, we need to access it using the useContext Hook.

5. React Router
- To add React Router in your application, run this in the terminal from the root directory of the application.
- Folder Structure
   - To create an application with multiple page routes, let's first start with the file structure.

   - Within the src folder, we'll create a folder named pages with several files:

   - src\pages\:
      - Layout.js\
      - Home.js
      - Blogs.js
      - Contact.js
      - ErrorPage.js
    Each file will contain a very basic React component.

