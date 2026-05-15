import { HealhService } from "../services/health.service";
import { Request, Response } from 'express'

export class HealhController {
    handle(req: Request, res: Response){
        const service = new HealhService()

        const result = service.execute()

        return res.json(result)
    }
}