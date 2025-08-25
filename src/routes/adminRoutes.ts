import { Router } from "express";
import { Request, Response } from "express";

const adminRouter = Router();

adminRouter.get('/admin/produto', () => {
    return "aaaa"
});

export default adminRouter;