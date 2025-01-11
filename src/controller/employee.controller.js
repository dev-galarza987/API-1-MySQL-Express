import { pool } from "../model/db.js";

//? --> getAllEmployee
export const getEmployee = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM t_employee");
		res.json(result[0]).status(200);
	} catch (err) {
		res.json({ "msg": "Error the request.", "status": 404 }).status(404)
		console.error("Error on console: \n", err);
		console.log("--> Oops: \n", err);
	}
};

//? --> getEmployeeById
export const getEmployeeById = async (req, res) => {
	try {
		const { id } = req.params;
		const [rows] = await pool.query("SELECT * FROM t_employee WHERE id=?", [
			id,
		]);
		res.json(rows[0]);
	} catch (err) {
		console.log("Error on console: \n", err);
	}
};

//? --> createEmployee
export const createEmployee = async (req, res) => {
	try {
		const { name, salary } = req.body;
		const [rows] = await pool.query(
			"INSERT INTO t_employee (name, salary) VALUES (?, ?)",
			[name, salary]
		);
		res.send({
			message: "Employee Created Successly",
			id: rows.insertId,
			name,
			salary,
		});
	} catch (err) {
		console.log("Error on console: \n", err);
	}
};

//? --> deleteEmployee
export const removeEmployee = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await pool.query("DELETE FROM t_employee WHERE id=?", [id]);

		if (result.affectedRows <= 0) return res.json({ id: id, message: "Employee not found" });

		res.json({ "message": "Employee deleted successful" }).status(200);

	} catch (err) {
		console.log("--> Oops: \n", err);
	}
};

//? --> updateFieldsEmployee
export const updateFieldsEmployee = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, salary } = req.body;

		const result = await pool.query(
			`UPDATE t_employee SET name=?, salary=? WHERE id=?`,
			[name, salary, id]
		);

		if (result.affectedRows === 0) {
			return res.status(404).json({ Message: "Employee not found" });
		}

		res.json({ message: "Employee updated successful" });
	} catch (err) {
		console.log("Error on console: \n", err);
	}
};

//? --> updateAFieldEmployee
export const updateAFieldEmployee = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, salary } = req.body;

		const result = await pool.query(
			"UPDATE t_employee SET name=IFNULL(?, name), salary=IFNULL(?, salary) WHERE id=?",
			[name, salary, id]
		);

		res.json({ message: "Employee updated successful" });

		if (result.affectedRows === 0)
			return res.status(404).json({ Message: "Employee not found" });
	} catch (err) {
		console.log("Error on console: \n", err);
	}
};
