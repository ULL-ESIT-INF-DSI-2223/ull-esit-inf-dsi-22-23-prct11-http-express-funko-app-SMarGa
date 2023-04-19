import { spawn } from "child_process";

import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "../public");
console.log(`Servvetada adquired from ${__dirname}`);
app.use(express.static(__dirname));

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
  const command = req.query.cmd as string;
  let args: string[] = [];
  if (req.query.args) {
    args = (req.query.args as string).split(" ");
  }

  const child = spawn(command, args);

  let response = "";
  let error = 0;
  child.on("error", () => {
    console.log("Error in request sending response");
    error = 2;
  });

  child.stdout.on("data", (data) => {
    response += data;
  });

  child.stderr.on("data", (data) => {
    error = 1;
    response += data;
  });

  child.on("close", () => {
    switch (error) {
      case 0:
        return res.send({
          executed_command: command,
          args: args,
          output: response,
        });
        break;
      case 1:
        return res.send({
          executed_command: command,
          args: args,
          error: response,
        });
        break;
      case 2:
        return res.send({
          executed_command: command,
          args: args,
          error: "Command not found",
        });

        break;
      default:
        break;
    }
  });
});

app.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
