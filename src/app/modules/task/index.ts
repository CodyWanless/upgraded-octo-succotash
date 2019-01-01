import { Router } from 'express';
import { post } from '../../../app-service/task';

export default () => {
    const router = Router();

    const postUseCase = post();

    router.post('/', (req, res) => {
        postUseCase(req.body)
            .then((data: any) => {
                res.status(200).json(data);
            })
            .catch((err: Error) => {
                res.status(500).json(err.message);
            });
    });

    return router;
};
