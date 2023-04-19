import { exec } from "child_process";

import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "../public");
console.log(`Servvetada adquired from ${__dirname}`);
app.use(express.static(__dirname));

app.get("", (_, res) => {
  res.send("<h1>404</h1>");
});

app.get("/notes", (req, res) => {
  if (!req.query.title) {
    return res.send({
      error: "A title has to be provided",
    });
  }

  console.log(req.query.title);
  return res.send({
    notes: [
      {
        title: "Blue note",
        body: "This is a blue note",
        color: "blue",
      },
      {
        title: "Yellow note",
        body: "This is a yellow note",
        color: "yellow",
      },
    ],
  });
});

app.get("/execmd", (req, res) => {
  if (!req.query.cmd) {
    return res.send({
      error: "A command has to be provided",
    });
  }
  let command = req.query.cmd as string;
  if (req.query.args) {
    command += " " + (req.query.args as string);
  }
  exec(command, (err, stdout, stderr) => {
    if (err) {
      return res.send({
        error: "Command not found",
        err_out: stderr,
      });
    } else {
      return res.send({
        execute_command: command,
        output: stdout,
      });
    }
  });
});

app.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
