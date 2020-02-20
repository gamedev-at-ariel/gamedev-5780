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
    e.preventDefault();
    if(e.button === 0) Reveal.next();
    if(e.button === 2) Reveal.prev();
}

window.addEventListener("mousedown", handleClick, false);
window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
