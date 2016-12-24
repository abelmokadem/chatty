# Chatty Style Guide
Style guide built using [fractal](http://fractal.build/). Runs [csscomb](http://csscomb.com/) as a precommit hook to 
keep the SCSS tidy. The structure is based on 
[ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) and uses BEM as a naming convention. 

## Getting started

Run the following commands:
``` bash
$ npm install
$ npm start
```

Visit `http://localhost:3000` to see the style guide.

## Scripts
- `start`: Run development server at `http://localhost:3000`
- `build`: Build and output css to `public/css/styles.css`
- `precommit` Tidy up the code before committing

## Structure

```
.
+-- docs                # Style guide documentation pages
+-- patterns            # Style guide implementation
+-- scripts             # Corresponds to the package.json scripts
+-- src                 # ITCSS based structure
|   +-- components      # Semantic components
|   +-- generic         # Reset and base styling
|   +-- objects         # Non semantic components
|   +-- settings        # Variables
|   +-- tools           # Mixins
+-- .babelrc            # Babel configuration
+-- package.json        # 🤓
```
