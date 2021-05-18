# Table of Contents

1. [Create a React App in Your Local Environment](https://github.com/SchmidtRichard/Keeper-App#create-a-react-app-in-your-local-environment)</br>
2. [Keeper App Project - Part 1 Challenge](https://github.com/SchmidtRichard/Keeper-App#keeper-app-project---part-1-challenge)</br>
    2.1 [Keeper App Project - Part 1 Challenge Final Code](https://github.com/SchmidtRichard/Keeper-App#keeper-app-project---part-1-challenge-final-code)</br>
3. [Keeper App Project - Part 2 Challenge]()</br>
   3.1 [Keeper App Project - Part 2 Challenge Final Code]()</br>

***


# [Create a React App in Your Local Environment](https://reactjs.org/docs/create-a-new-react-app.html)

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have `Node >= 10.16 and npm >= 5.6` on your machine. To create a project, run:

```js
npx create-react-app my-app
cd my-app
npm start
```

Then open up the project folder and delete everything that is not needed, only leave: `public/index.html`, `src/index.js`, `node_modules`, `.gitignore`, `package-lock.json`, `package.json`, and `README.md`.

***

# Keeper App Project - Part 1 Challenge

:hourglass_flowing_sand: :jigsaw: :question: Below are the steps for **part 1 challenge**:

1. Create a new React app.
2. Create a App.jsx component.
3. Create a Header.jsx component that renders a `<header>` element to show the Keeper App name in an `<h1>`.
4. Create a Footer.jsx component that renders a `<footer>` element to show a copyright message in a `<p>` with a dynamically updated year.
5. Create a Note.jsx component to show a `<div>` element with a `<h1>` for a title and a `<p>` for the content.
6. Make sure that the final website is styled like the example shown [here](https://l1pp6.csb.app/)
**HINT: You will need to study the classes in the `styles.css` file to apply styling.**

## Keeper App Project - Part 1 Challenge Final Code

:computer: :gear: :heavy_check_mark: **index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Keeper App</title>
    <link
    href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles.css"/>
  </head>
  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/jsx"></script>
  </body>
</html>
```

:computer: :gear: :heavy_check_mark: **index.js**

```js
import React from "react";
import ReactDom from "react-dom";

//ES6 feature to import React components
import App from "./components/App.jsx";

ReactDom.render(
<App />,
document.getElementById("root")
);
```

:computer: :gear: :heavy_check_mark: **App.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//ES6 feature to import React components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App(){
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

/*
ES6 feature to export React components
we don't use parentheses (export default App();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default App;
```

:computer: :gear: :heavy_check_mark: **Header.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

function Header(){
    return <header>
    <h1>Keeper</h1>
    </header>
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Header;
```

:computer: :gear: :heavy_check_mark: **Footer.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

function Footer(){
    
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Footer;
```

:computer: :gear: :heavy_check_mark: **Note.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

function Note(){
    return(
        <div className="note">
        <h1>Title</h1>
        <p>Content</p>
        </div>
    );
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Note;
```

***

# Keeper App Project - Part 2 Challenge

:hourglass_flowing_sand: :jigsaw: :question: Below are the steps for **part 2 challenge**:

1. Render all the notes inside `notes.js` as a separate `Note component`.

Now we have the **notes.js** files containing all the notes we need to render:

```js
const notes = [
  {
    key: 1,
    title: "Delegation",
    content:
      "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
  },
  {
    key: 2,
    title: "Loops",
    content:
      "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
  },
  {
    key: 3,
    title: "Arrays",
    content:
      "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
  },
  {
    key: 4,
    title: "Hardware vs. Software",
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  }
];
```

## Keeper App Project - Part 2 Challenge Final Code

:computer: :gear: :heavy_check_mark: **App.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//ES6 feature to import React components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

console.log(notes);

function App() {
	return (
		<div>
			<Header />

			{notes.map((newNote) => (
				//Return a Note component that has some props being sent over
				<Note key={newNote.key} noteTitle={newNote.title} noteContent={newNote.content} />
			))}

			<Footer />
		</div>
	);
}

/*
ES6 feature to export React components
we don't use parentheses (export default App();)
because it would make it return immediately, instead
we want to use it as a component (inside a HTML tag...)
*/
export default App;
```

:computer: :gear: :heavy_check_mark: **Note.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

function Note(props) {
	return (
		<div className="note">
			<h1>{props.noteTitle}</h1>
			<p>{props.noteContent}</p>
		</div>
	);
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediately, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Note;
```












</br></br></br></br></br></br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
