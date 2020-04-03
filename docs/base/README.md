# Base

The **base** folder makes sure to reset the HTML document and apply some default styling in order to normalize your elements.

## Reset

The **reset.scss** file does simply what it says. It resets the HTML document. HTML elements are supplied with some default styling inherited from your browser. This files resets these default values to make sure every node is ready to be styled from scratch.

## Normalize

The **normalize.scss** file aims to make everything more in tune with each other. Makes sure the font sizes are set correctly, margins for elements and some other minor stuff to make sure everything is styled with a set of standard values.

## Variables

The **variables.scss** file contains many variables used throughout Ceratops. These values are all supplied with SASS !default. This means it is possible to overwrite these values. This means you are able to change the variables to your liking, before using the rest of the framework. This only **works when importing the SCSS files per folder**, not when including the compiled CSS file.

```css
@import 'ceratops/base/_all';

$body-font-size: 18px; // default value is 16px

@import 'ceratops/typography/_all';
...
```
