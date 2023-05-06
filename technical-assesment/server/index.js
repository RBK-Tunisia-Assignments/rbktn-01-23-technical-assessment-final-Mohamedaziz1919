const express = require("express");
const db=require("./database-mysql/index")
const cors=require("cors")
const app = express();
const PORT = 4000;
// TODO - add additional route handlers as necessary

app.use(express.json())
app.use(cors());

app.get("/api/recepie",(req,res)=>{
  const cb=(err,results)=>{
    if(err) res.status(500).send(err)
    else res.json(results)
   }
   db.getAll(cb)
});

app.post("/api/recepie",(req,res)=>{
  // const sql =`INSERT INTO recepie VALUES("${req.body.Cook_Time}","${req.body.Prep_Time}","${req.body.recepie_Name}","${req.body.Serves}","${req.body.categorie}","${req.body.recepie_Image}","${req.body.recepie_Description}","${req.body.recepie_Ingredients}","${req.body.users_user_Id}")`
  const cb=(err,results)=>{
    if(err) res.status(500).send(err)
    else res.json(results)
   }
   db.postOne(recipe,cb)
})
app.get("/api/recepie/search/recepie_Name",(req,res)=>{
  const cb=(err,results)=>{
    if(err) res.status(500).send(err)
    else res.json(results)
   }
   db.getOne(cb)
});

app.delete("/api/recepie/recepie_Id",(req,res)=>{
  const recepie_Id = req.params.recepie_Id;
  const cb = (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(`Deleted post with recepie_Id ${recepie_Id}`);
      res.status(204).send();
    }
  };
   db.deleteOne(cb)
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// the first work not here , i clone anothor one and we start

// app.get("/api/recepie", (req, res) => {
//   db.getAll()
//     .then((result => {
//       res.json(result);
//     }))
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.post("/api/recepies", (req, res) => {
//   db.postOne()
//     .then((result => {
//       res.send(result);
//     }))
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.delete("/api/recepies/:id ",(req,res)=>{
// db.deleteOne()
// .then((result => {
//   res.send(result);
//   res.status(204)
// }))
// .catch((err)=>{
//   console.log(err)
//   res.status(401)
// })
// })

// app.get(" /api/recepies/search/:recepie_Name", (req, res) => {
//   db.getOne()
//     .then((result => {
//       res.send(result);
//     }))
//     .catch((err) => {
//       console.log(err);
//     });
// });
