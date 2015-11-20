# PostCSS Prefixer font-face

[PostCSS] plugin to prefix font-faces.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */

@font-face {
  font-family: MyWebFont;
}

div {
  width: 100px;
  background: red;
  position: relative;
  font-family: Arial;
}

a {
  color: green;
  position: relative;
  font-family: MyWebFont;
}

```

```css
/* Output example */

@font-face {
    font-family: myWebsite-MyWebFont;
}

div {
    width: 100px;
    background: red;
    position: relative;
    font-family: Arial;
}

a {
    color: green;
    position: relative;
    font-family: myWebsite-MyWebFont;
}
```

## Usage

```js
var prefix = require('postcss-prefixer-font-face');
postcss([ prefix({prefix: 'myWebsite-'}) ])
```

See [PostCSS] docs for examples for your environment.
