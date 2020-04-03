/* Initialization code for the reveal.js slide show. */
/* Include at end of document, after reveal.js */


// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
    hash: true,
    dependencies: [
        { src: '../revealjs/plugin/markdown/marked.js' },
        { src: '../revealjs/plugin/markdown/markdown.js' },
        { src: '../revealjs/plugin/highlight/highlight.js' },
        { src: '../revealjs/plugin/notes/notes.js', async: true }
    ],
    rtl: true,
    center: false,
});


/* https://www.raymondcamden.com/2012/10/20/Adding-mouse-click-navigation-to-revealjs */

function handleClick(e) {
    var tagname = e.target.tagName.toLowerCase();
    if (tagname=="a" || tagname=="img" || tagname=="textarea" || tagname=="ol" || tagname=="ul" || tagname=="li")
        return;

    var c = e.target.className.toLowerCase();
    //alert(c)
    if(c==="" || c.includes("background") || c.includes("blue") || c.includes("green") || c.includes("red") || c.includes("present") || c.includes("fragment")) {
        e.preventDefault();
        if(e.button === 0) {
            Reveal.next();
        }
//        else if(e.button === 2) {
//            Reveal.prev();
//        }
    }
}

window.addEventListener("mousedown", handleClick, false);
window.addEventListener("contextmenu", handleClick, false);


/* For printing and PDF export */
var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '../revealjs/css/print/pdf.css' : '../revealjs/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );

