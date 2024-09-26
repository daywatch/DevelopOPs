const fs = require('fs')
const path = require('path')

const productDbPath = path.join(__dirname,'../db/product.json')

module.exports = class Product{
    constructor(
        name,
        price
    ){
        // this is just like self in py
        this.name = name;
        this.price = price;
    }

    // simulate a dataset
    async save(){
        return new Promise((resolve,reject) => {
            fs.readFile(productDbPath,"utf8",(err,data) => {
                if (err){
                    reject(err.message)
                    return;
                }
                const productDbData = JSON.parse(data);

                productDbData.push({id: productData.lenghth + 1, name: this.name, price: this.price});

                fs.writeFile(productDbPath, JSON.stringify(productDbData),'utf8',(err)=>{
                    if(err){
                        console.error(err);
                    }
                    resolve('Data appeneded successfully')
                })
        }) 
        })

    }
    // read a json with multiple inputs
    static findAll(){
        const data=fs.readFileSync(productDbPath,'utf8');
        return JSON.parse(data);
    }
    static deleteOne(id){
        return new Promise((resolve,reject)=>{
            fs.readFile(productDbPath,'utf8',(err,data)=>{
                if (err){
                    reject(err.message)
                    return;
                }
                const productDbData = JSON.parse(data);
                const newProductDbData = productDbData.filter(product => {
                    return product.id !== id
                });

                fs.writeFile(productDbPath,JSON.stringify(newProductDbData),'utf8',(err)=>{
                    if(err){
                        reject(err)
                        return;
                    }
                    resolve(newProductDbData);
                })
            })
        })
    }
}