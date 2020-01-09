# element-removeclass

Tiny zero dependency helper module for removing classes from elements

This emulates jQuery's `removeClass` behaviour: it works for multiple elements, can take a space delimitted String for multiple classes, and even works in awful browsers.

```javascript
removeClass(elements, 'class-1 class-2 class-3');
```

## Installation and usage

Grab from NPM

```
npm install element-removeclass
```

And import it

```javascript
import removeClass from 'element-removeclass';
```

Or grab the minified JavaScript from unpkg

```html
<script src="https://unpkg.com/element-removeclass"></script>
```
