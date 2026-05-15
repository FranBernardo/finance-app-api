import { Router } from "express";
import { HealhController } from "../controllers/health.controller";

const routes = Router()

const healthController = new HealhController()

routes.get('/hello', healthController.handle)

export default routes

