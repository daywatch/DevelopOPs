Steps
1. `npm init -y`
2. `npm install --save-dev nodemon`
3. In the package.json file, change "script" into commands like this:
```"scripts": {
    "start-dev": "nodemon index.js",
   	    "start": "node index.js"
  	}```
4. Run `npm run start-dev` for testing