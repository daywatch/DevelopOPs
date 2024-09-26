In this poject, I use Express.js to realize API routing on three REACT methods: POST, GET, and DELETE
- controller: a js file on error printing and status code logging
- db: a local json file 
- model: a js file on defining the data structure of the DB data
- routes: contains two routes, each of which defines the urls and their REACT method
- index.js: a js server file connecting routes & middlewares

<br>
Installation
1. `npm init -y`
2. `npm install express`
3. In the package.json file, add a script value like '"start": "nodemon index.js"'
<br>
Testing REACT
1. Download [Postman] (https://www.postman.com/downloads/)
2. In postman, creat a new workspace, add a new http request, and use urls defined by routes
- localhost:3000/admin/add-product/1 + GET + raw-json like `{"name":"apple", price:"$3"}'
- localhost:3000/shop/delete-product/1 + POST 
- localhost:3000/admin/delete-product/1 + DELETE