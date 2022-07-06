const express = require("express");

const app = express();
const port = 3000;

const fs = require("fs");
let rawdata = fs.readFileSync("users.json");
const users = JSON.parse(rawdata);

const findUserByEmail = (email) =>
  users.find((user) => user.emailAddress === email);

app.get("/users", (req, res) => {
  let pageSize = parseInt(req.query.pageSize);
  if (!pageSize) {
    pageSize = 10;
  }

  const pageCount = Math.ceil(users.length / pageSize);

  let page = parseInt(req.query.pageNumber);

  if (!page) {
    page = 1;
  }

  if (page > pageCount) {
    page = pageCount;
  }

  res.json({
    pageSize: page,
    currentCount: pageCount,
    totalCount: users.length,
    data: users.slice(page * pageSize - pageSize, page * pageSize),
  });
});

app.get("/users/:email", (req, res) => {
  const user = findUserByEmail(req.params.email);

  if (!user) {
    return res.status(404).send();
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
