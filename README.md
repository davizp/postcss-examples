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
	Variables
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
Output
```css
h1 {
		background: grey;
		color: #00F;
	}
```
