import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function (req, res) {
	res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);

console.log(
	`Production server started at http://localhost:${port} \nPleace run 'npm run dev' for development. \n`
);
