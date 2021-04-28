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