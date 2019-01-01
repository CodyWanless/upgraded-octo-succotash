import { Router } from 'express';

export default () => {
    const router = Router();

    router.get('/', (req, res) => {
        res.status(200).json({ status: 'Healthcheck passes!' });
    });

    return router;
};
