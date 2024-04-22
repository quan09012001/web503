const connect = require("../db/connect");
const con = connect();
class Product {
    static getCount(){
        return new Promise ((resolve, reject)=>{
            let sql = "SELECT COUNT(*) as count FROM products";
            con.query(sql, (err, data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    }
    static getAllData(q, limit, offset){
        return new Promise ((resolve, reject)=>{
            let sql = `SELECT * FROM products WHERE name LIKE '%${q}%' 
            LIMIT ${limit} OFFSET ${offset}`;
            con.query(sql, (err, data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });
    }
}

module.exports = Product;