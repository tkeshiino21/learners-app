This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

"lint-staged": {
"src/**/\*.{js,jsx,ts,tsx}": [
"eslint --fix",
"git add"
],
"src/**/\*.css": [
"stylelint --fix",
"git add"
]
}
