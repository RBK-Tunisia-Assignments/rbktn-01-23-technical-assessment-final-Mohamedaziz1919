const mysql = require("mysql2");
const mysqlConfig = require("./config.js");
// const connection = mysql.createConnection(mysqlConfig).promise()

// connection
// .connect()
// .then(() => {
//     console.log('Connected to MySQL!')
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/* i need to creat connection with promise but this recepie table we don't working by the way my all queries it's work wanna test return anything not syntaxerror
and we refactor my work  */ 


const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
  if (err) console.log("Error to connect to database", err);
  else console.log(" Database connected ");
});

const getAll=(cb)=>{
  const sql='SELECT * FROM `recepie`'
  connection.query(sql,(err,res)=>{
    cb(err,res)
  })
};
const postOne = (recipe ,cb) => {
  const sql =`INSERT INTO recepie VALUES("${req.body.Cook_Time}","${req.body.Prep_Time}","${req.body.recepie_Name}","${req.body.Serves}","${req.body.categorie}","${req.body.recepie_Image}","${req.body.recepie_Description}","${req.body.recepie_Ingredients}","${req.body.users_user_Id}")`

    connection.query(sql,recipe,(err,res)=>{
      cb(err,res)
    })
  }

const getOne=(recepie_Name,cb)=>{
  const sql =`SELECT * FROM recepie WHERE recepie_Name = "${recepie_Name}"`
  connection.query(sql,(err,res)=>{
      cb(err,res)
  })
}

 const deleteOne=(recepie_Id,cb)=>{
  const sql=`DELETE FROM recepie WHERE recepie_Id = ? `;
  connection.query(sql,(err,res)=>{
    cb(err,res)
})
 }






module.exports = {connection , getAll , postOne ,getOne,deleteOne};


//and this work the same thing 

// const getAll=(()=>{
//   const sql="select * from `recepie`";
// return connection.query(sql)
//  });
//  const postOne=(()=>{
//   const sql="INSERT INTO `recepie` SET ?"
//   return connection.query(sql)
//  })
//  const deleteOne=(()=>{
//   const sql= " DELETE FROM `recepie` WHERE recepie_Name = ? "
//   return connection.query(sql)
//  })
//  const getOne = (recepie_Name) => {
//   const sql= `select * from recepie where name='${recepie_Name}' `
//   return connection.query(sql)
// }