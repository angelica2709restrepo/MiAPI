import { Router } from "express";
import infoController from "../controllers/infoController.js";

const router=new Router()

//Obtiene la informacion disponible
router.get('/info',infoController.index)
//Crear una nueva info
router.post('/info',infoController.store)
//Detalles del info por el id
router.post('/info/:id',infoController.details)

export default router