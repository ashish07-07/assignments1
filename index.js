const express = require("express");

let count = 0;

const totolist = [
  { id: ++count, title: "react", dec: "read about reat" },
  { id: ++count, title: "typescript", dec: "read about typescript" },
  { id: ++count, title: "nextjs", dec: "read about next js" },
];

const app = express();
app.use(express.json());

app.get("/todolist", function (req, res) {
  const email = req.headers.email;

  //   res.json(totolist);
  res.status(200).json(totolist);
});

app.get("/todo/:id", function (req, res) {
  const reqid = parseInt(req.params.id, 10);
  const todo1 = totolist.find((todore) => todore.id === reqid);
  if (todo1) {
    res.status(200).json(todo1);
  }
});

app.post("/todos", function (req, res) {
  const newitem = req.body;

  totolist.push(newitem);
  console.log(newitem);
  res.status(201).json(newitem);
});

app.post("/emotional", function (req, res) {
  const obj2 = req.body;
  console.log(obj2);
  console.log(obj2.email);

  res.status(201).json(obj2);
});

// app.put("/uptodos", function (req, res) {
//   const reid = parseInt(req.headers.id, 10);
//   const newo = req.body;

//   const newarray = totolist.map((objra) => (objra.id === reid ? newo : objra));
//   console.log(newarray);
//   res.status(200).json(newarray);
// });

app.put("/lasttry", function (req, res) {
  const id = parseInt(req.headers.id, 10);
  totolist[id].title = req.body.title;
  totolist[id].dec = req.body.dec;
  totolist[id].id = req.body.id;
  res.json(totolist);
});

app.delete("/delete/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  totolist.splice(id, 1);
  res.status(201).json(totolist);
});
console.log(totolist);

const PORT = 4000;
app.listen(PORT, function () {
  console.log(`server listening on the port ${PORT} `);
});
