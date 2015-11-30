# <a href="http://github.com/postcss/postcss">postcss</a>-examples
> Working with PostCSS.

## Download
With cli:
```
git clone https://github.com/davizp/postcss-examples.git
```
## Installing npm packages
```
npm install
```

## Run the project:
Go to "./dev" folder and run this command:
```
gulp server
```
Server should start in <a href="http://localhost:3000/">http://localhost:3000/</a>

## Examples
### Variables
```sass
	/* EXAMPLE 1 - cssnext */
		:root {
			--mainColor: grey;
		}
		/* EXAMPLE 2 - postcss-simple-vars */
		$blue : #00F;

	h1 {
		background: var(--mainColor);
		color: $blue;
	}
```
Output:
```css
h1 {
		background: grey;
		color: #00F;
	}
```

### Autoprefix
```css
h2 {
	display: flex;
}
```
Output:
```css
h2 {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
}
```
### Import
```css
@import "partials/background.css";
```
Output: 
```css
body {
	/* This is a partial file */
	background: #EFEBE9;
}
```

### Properties
```css
	/* size : 2 parameter */
	size: $height $width {
		height: $height;
		width: $width;
	}
	/* size : 1 parameter */
	size: $size {
		height: $size;
		width: $size;
	}
	.rectangle {
	  size: 50px 100px;
	}

	.square {
	  size: 50px;
	}
```
Output: 
```css
	.rectangle {
	  height: 50px;
	  width: 100px;
	}

	.square {
	  height: 50px;
	  width: 50px;
	}	
```
### Extend
```css
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}
```
Output: 
```css
.message, .success {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}
```
