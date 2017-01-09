# Starry Sky Generator
Three times a second, a different canvas of stars is generated as the background for this classic Calvin and Hobbes scene. It may look like a gif but it's actually made with Javascript! 
**Live Demo**: [https://stephorpilla.github.io/calvinAndHobbes/](https://stephorpilla.github.io/calvinAndHobbes/)

![recording 6](https://cloud.githubusercontent.com/assets/18673328/21786400/847515b4-d678-11e6-8317-16421f8aa5d9.gif)

## Random Star Generation with Javascript
I used a math random function to decide whether to place a star at any given location on the canvas. There is a 50/100000 chance of a white star for a given location on the canvas and a 5/100000 chance of a yellow star. Opacity is also randomized for each star. The resulting canvas is set as the background image of the body with canvas.toDataURL('image/png').

## Using `<Canvas>`
The HTML canvas element is used to draw graphics, on the fly, via scripting (usually JavaScript). The canvas element is only a container for graphics. You must use a script to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.
