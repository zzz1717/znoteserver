

const mongoose = require('mongoose');



// 设置默认 mongoose 连接
const mongoDB = 'mongodb+srv://ZNote:wzxznote2020@znote-xjpp6.azure.mongodb.net/znote?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;
// 取得默认连接
const db = mongoose.connection;

//将连接与错误事件绑定（以获得连接错误的提示）



db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));




// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ZNote:<password>@znote-xjpp6.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
module.exports = db; 