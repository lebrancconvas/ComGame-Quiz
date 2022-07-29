import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.use((req: Request, res: Response, next: Function) => {
	console.log(`[${req.method}] ${req.url}`);
	next();
})

router.get('/', (req: Request, res: Response) => {
	res.send("Hello Server.");
});

export default router;