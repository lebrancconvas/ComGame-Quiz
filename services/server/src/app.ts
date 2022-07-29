import express, { Request, Response } from 'express';
import router from './routes/router';

const app = express();

const PORT = 3002;

app.use(router);

app.listen(PORT, () => {
	try {
		console.log(`[SUCCESS] TASK_01: Server is running at the port ${PORT}`);
	} catch(err) {
		console.error(err);
		console.log(`[FAILURE] ERR_01: Server is not running at the port ${PORT}`);
	}
})