import express from "express";
import morgan from "morgan";
import cors from "cors";
import { root } from "./routes/root.routes.js";
import { getAllEmployees, postEmployee, getEmployeeId, putEmployee, patchEmployee } from "./routes/employee.routes.js";
import "dotenv/config";


const app = express();


//* --> Setting
app.set('name', '<API>');


//* --> Middleware
app.use(cors({ origin: "*", methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE' ] }));                        //? --> cors({ options? })
app.use(morgan('dev'));                 //? --> morgan({ options? })
app.use(express.json());                //? --> json({ options? })
app.use(express.static('./public'));    //? --> static({ options? })


//* --> Routes
// app.use((req, res, next) => { console.log("Middleware 1 Active \nBefore of path:'/'"), next()} );
app.use(root);
app.use('/api', getAllEmployees);
app.use('/api', getEmployeeId);
app.use('/api', postEmployee);
app.use('/api', putEmployee);
app.use('/api', patchEmployee);


//* --> Port
app.listen(process.env.PORT, () => {
	console.log(`\n--> Server ${app.get("name")} listen on http://localhost:${process.env.PORT}\n`);
})
