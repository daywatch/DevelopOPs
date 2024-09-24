/*
This is an exercise on using node.js to build a simple web REACT API, including:
1.Create a server
2.Use GET and POST methods and status codes
3. Use Promise,try, and catch for asynchronous processes like appending strings to an array over time
*/

const http = require('http');

const server = http.createServer();

const products = [{ name: "banana"},{ name: "banana2"},{ name: "banana3"}]

function parse(req){ //build a async function
    return new Promise((resolve,reject) => {
        let body = ""

        req.on('data',(chunk) => {
            body += chunk.toString();
        })//listen to data event + append strings

        req.on('end',()=>{
            try{
                //use reseolve to return the obj to remove the part of the body
                resolve({name : body.replace("productName=","")}) ;
                //console.log(body);
            } catch(err){
                reject(err);
            }
        })
    })
}

server.prependListener('request',(req,res)=>{
    console.log(`Incoming ${req.method} request for ${req.url}`);
    req.message = "Message from middleware";
    req.error = "Errors from middleware"
})

server.on('request',(req,res)=>{
    console.log(req.message, "\n", req.error);
    console.log(req.url);//check url

    if (req.url === "/"){
        res.setHeader("Content-Type", "text/html" )
        res.end(`
            <form action="/products" method="POST">
                <input type="text" name="productName" />
                <button type="submit">Post</button>
            </form>
            `);
    } else if(req.url === "/products"){    
        if (req.method === "POST"){

        parse(req).then(product => {
            products.push(product); //append
            res.end(`products created! \n
                ${JSON.stringify(products)} 
                `)//${} like f string
        }).catch(err => {
            res.statusCode = 400;
            res.end("Invalid data")
        })

        }

        else if (req.method === "GET"){

        //res.writeHead(200,{ "Content-Type": "text/html" })
        res.setHeader("Content-Type", "application/json");
    
        res.statusCode = 200;
        res.end(JSON.stringify(products));
    } else {
        res.setHeader("Content-Type", "text/html");
    
        res.statusCode = 405;
        res.end('Method not allowed')
    }
    } else {
        res.setHeader("Content-Type", "text/html");
    
        res.statusCode = 404;
        res.end('Page not found!!!!')
    }


    });

server.listen(3000, () => {
    console.log("Server is up and running on port 3000")
});