/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

function Note() {
	return (
		<div className="note">
			<h1>Title</h1>
			<p>Content</p>
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
