import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

//? --> Get Path Relative
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//* --> Controller
export const getRoot = (req, res) => {
	try {
		res.senFile(
			"index.html",
			{
				root: join(__dirname, "public"),
			},
			(err) => {
				if (err) {
					console.error(err);
					console.log("--> Oops: \n", err);
				}
			}
		).status(200);
	} catch (err) {
		res.json({ "message": "Error to request the resource", "status": 404 }).statuc(404);
		console.log("Error inesperated...");
	}
};
