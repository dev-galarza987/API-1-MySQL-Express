import { Router } from "express";
import { 
    getEmployee, 
    getEmployeeById,
    createEmployee,
    removeEmployee,
    updateFieldsEmployee,
    updateAFieldEmployee
} from "../controller/employee.controller.js";


const router = Router();    //? --> Router({ options? })


export const getAllEmployees = router.get('/get', getEmployee);

export const getEmployeeId = router.get('/get/:id', getEmployeeById);

export const postEmployee = router.post('/post', createEmployee);

export const deleteEmployee = router.delete('/delete/:id', removeEmployee);

export const putEmployee = router.put('/put/:id', updateFieldsEmployee);

export const patchEmployee = router.patch('/patch/:id', updateAFieldEmployee);